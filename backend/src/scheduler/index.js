import "../LGNodes/WebhookNode"
import "../LGNodes/FetchNode"
import worker from '../worker'
import testData from '../graph.json'
import escrow from "../escrow/escrowmodel"
import escmod from "../escrow/Escmod"
import "../LGNodes/AeternityToDexNode"
import "../LGNodes/AddLiquidity"
import "../LGNodes/AddLiquidityAe"
import "../LGNodes/RemoveLiquidity"
import "../LGNodes/SwapFromAe"
import "../LGNodes/TransAE"

import "../LGNodes/SwapToAe"

import "../LGNodes/TokenTransfer"
import "../LGNodes/SwapToken"
import "../LGNodes/TokenBalance"
import "../LGNodes/AeternityBalance"
import fetch from 'node-fetch';
import { getBlockHeight } from "../aeternity/utils"
import { getTxinfo } from "../aeternity/utils"

const run = async () => {
  let isSynchro = false
let lastHeight;
async function sync() {
  isSynchro = true
  lastHeight = await getBlockHeight();
}
let blockevents = {}
setInterval(async () => {
  try {
    if (!isSynchro) {
      await sync()
    }

    console.log("the height is", lastHeight)
    let res = await fetch("https://testnet.aeternity.io/mdw/v2/contracts/logs?contract_id=ct_27qrt48PFVihQWSLneiMJByXA92PiymFdR2nBJN8rwoNLQ1a4z&limit=10")
    res = await res.json()

    for (let i = 0; i < res.data.length; i++) {
      if (!blockevents[res.data[i].height]) {
        blockevents[res.data[i].height] = []

      }
      
      if (parseInt(res.data[i].height) >= parseInt(lastHeight)) {
        console.log("why this condition passed"+ res.data[i].height)
        if (!blockevents[res.data[i].height].includes(res.data[i]['call_tx_hash'])) {

          blockevents[res.data[i].height].push(res.data[i]['call_tx_hash'])
          let txInfo = await getTxinfo(res.data[i]['call_tx_hash'])
          if (txInfo[0]['name'] == "ExecuteProposal") {
            txInfo = txInfo[0]
            let daoaddress = txInfo['args'][1].replace("ak_", "ct_")

            console.log("in the scheduler the dao is " + daoaddress)
            let m = await escmod.findById(txInfo['args'][2])
        
            if (m) {
              console.log(m.model)
              worker.start({ escrowId: res.data[i]['call_tx_hash'], condition: m.model, daoaddr: daoaddress })
            }
          }
        }
      }
    }

    if(lastHeight < res.data[0].height){
      lastHeight = res.data[0].height
    }
  
  } catch (err) {
    console.log(err)
  }
}, 5000)


  
};




const scheduler = {
  run,
};

export default scheduler;
