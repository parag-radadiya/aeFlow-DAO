let smart_dao = [{"namespace":{"name":"Option","typedefs":[]}},{"contract":{"event":{"variant":[{"Transfer":["address","address","int"]},{"Allowance":["address","address","int"]},{"Burn":["address","int"]},{"Mint":["address","int"]},{"Swap":["address","int"]}]},"functions":[{"arguments":[],"name":"aex9_extensions","payable":false,"returns":{"list":["string"]},"stateful":false},{"arguments":[],"name":"meta_info","payable":false,"returns":"AEX9Interface.meta_info","stateful":false},{"arguments":[],"name":"total_supply","payable":false,"returns":"int","stateful":false},{"arguments":[],"name":"owner","payable":false,"returns":"address","stateful":false},{"arguments":[],"name":"balances","payable":false,"returns":{"map":["address","int"]},"stateful":false},{"arguments":[{"name":"_1","type":"address"}],"name":"balance","payable":false,"returns":{"option":["int"]},"stateful":false},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"int"}],"name":"transfer","payable":false,"returns":"unit","stateful":true},{"arguments":[],"name":"allowances","payable":false,"returns":"AEX9Interface.allowances","stateful":false},{"arguments":[{"name":"_1","type":"AEX9Interface.allowance_accounts"}],"name":"allowance","payable":false,"returns":{"option":["int"]},"stateful":false},{"arguments":[{"name":"_1","type":"address"}],"name":"allowance_for_caller","payable":false,"returns":{"option":["int"]},"stateful":false},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"address"},{"name":"_3","type":"int"}],"name":"transfer_allowance","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"int"}],"name":"create_allowance","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"int"}],"name":"change_allowance","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"}],"name":"reset_allowance","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"int"}],"name":"burn","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"int"}],"name":"mint","payable":false,"returns":"unit","stateful":true},{"arguments":[],"name":"swap","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"}],"name":"check_swap","payable":false,"returns":"int","stateful":false},{"arguments":[],"name":"swapped","payable":false,"returns":{"map":["address","int"]},"stateful":false}],"kind":"contract_interface","name":"AEX9Interface","payable":false,"typedefs":[{"name":"meta_info","typedef":{"record":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"int"}]},"vars":[]},{"name":"allowance_accounts","typedef":{"record":[{"name":"from_account","type":"address"},{"name":"for_account","type":"address"}]},"vars":[]},{"name":"allowances","typedef":{"map":["AEX9Interface.allowance_accounts","int"]},"vars":[]}]}},{"namespace":{"name":"ListInternal","typedefs":[]}},{"namespace":{"name":"List","typedefs":[]}},{"namespace":{"name":"Pair","typedefs":[]}},{"contract":{"functions":[{"arguments":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"initialSupply","type":"int"},{"name":"dist","type":"TokenContract.distribution"}],"name":"init","payable":false,"returns":"TokenContract.state","stateful":true},{"arguments":[],"name":"name","payable":false,"returns":"string","stateful":false},{"arguments":[],"name":"symbol","payable":false,"returns":"string","stateful":false},{"arguments":[],"name":"decimals","payable":false,"returns":"int","stateful":false},{"arguments":[],"name":"totalSupply","payable":false,"returns":"int","stateful":false},{"arguments":[{"name":"address","type":"address"}],"name":"balance","payable":false,"returns":"int","stateful":false},{"arguments":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","payable":false,"returns":{"option":["int"]},"stateful":false},{"arguments":[{"name":"recipient","type":"address"},{"name":"amount","type":"int"}],"name":"transfer","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"spender","type":"address"},{"name":"amount","type":"int"}],"name":"approve","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"owner","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"int"}],"name":"transferFrom","payable":false,"returns":{"tuple":[]},"stateful":true}],"kind":"contract_child","name":"TokenContract","payable":false,"state":{"record":[{"name":"balances","type":{"map":["address","int"]}},{"name":"allowances","type":{"map":["address",{"map":["address","int"]}]}},{"name":"metaInfo","type":"TokenContract.meta_info"}]},"typedefs":[{"name":"meta_info","typedef":{"record":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"int"},{"name":"totalSupply","type":"int"}]},"vars":[]},{"name":"distribution","typedef":{"map":["address","int"]},"vars":[]}]}},{"contract":{"functions":[{"arguments":[],"name":"join","payable":true,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"int"}],"name":"setStakeAmount","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"}],"name":"createVotingProposal","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"bool"}],"name":"voteToBlacklist","payable":false,"returns":"unit","stateful":true},{"arguments":[],"name":"unstake","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"address"}],"name":"getblacklistVoting","payable":false,"returns":{"option":["GuardInterface.voteBox"]},"stateful":false},{"arguments":[{"name":"_1","type":"address"}],"name":"isValidator","payable":false,"returns":"bool","stateful":false},{"arguments":[],"name":"totalValidators","payable":false,"returns":"int","stateful":false},{"arguments":[{"name":"_1","type":"address"},{"name":"_2","type":"int"},{"name":"_3","type":"int"}],"name":"increaseLock","payable":false,"returns":"unit","stateful":true},{"arguments":[{"name":"_1","type":"int"},{"name":"_2","type":"string"}],"name":"executeProposal","payable":false,"returns":"unit","stateful":true}],"kind":"contract_interface","name":"GuardInterface","payable":false,"typedefs":[{"name":"validator","typedef":{"record":[{"name":"stakedAmount","type":"int"},{"name":"unstakeLockTime","type":"int"},{"name":"isValidator","type":"bool"}]},"vars":[]},{"name":"voteBox","typedef":{"record":[{"name":"validator","type":"address"},{"name":"forVotes","type":"int"},{"name":"againstVotes","type":"int"},{"name":"votes","type":{"map":["address","bool"]}}]},"vars":[]},{"name":"distribution","typedef":{"map":["address","int"]},"vars":[]}]}},{"contract":{"event":{"variant":[{"ExecuteProposal":["address","address","string"]},{"TokenRequested":["int"]},{"DisputeRaise":["int"]},{"DisputeEnded":["int","bool"]}]},"functions":[{"arguments":[{"name":"id","type":"int"},{"name":"tokenContract","type":"TokenContract"},{"name":"requiredPercentage","type":"int"},{"name":"metadata","type":"string"},{"name":"parent","type":"GuardInterface"}],"name":"init","payable":false,"returns":"SmartDao.state","stateful":true},{"arguments":[],"name":"getTokenContract","payable":false,"returns":"TokenContract","stateful":false},{"arguments":[{"name":"member","type":"address"}],"name":"isMember","payable":false,"returns":"bool","stateful":false},{"arguments":[{"name":"proposalId","type":"int"}],"name":"getProposal","payable":false,"returns":{"option":["SmartDao.proposal"]},"stateful":false},{"arguments":[{"name":"disputeId","type":"int"}],"name":"getDispute","payable":false,"returns":{"option":["SmartDao.dispute"]},"stateful":false},{"arguments":[{"name":"requestId","type":"int"}],"name":"getTokenRequest","payable":false,"returns":{"option":["SmartDao.tokenRequest"]},"stateful":false},{"arguments":[{"name":"description","type":"string"},{"name":"flowId","type":"string"}],"name":"createProposal","payable":false,"returns":"int","stateful":true},{"arguments":[{"name":"requestId","type":"int"},{"name":"description","type":"string"}],"name":"raiseDispute","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"requestId","type":"int"},{"name":"inFavor","type":"bool"}],"name":"voteDispute","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"requestId","type":"int"}],"name":"endDispute","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"amount","type":"int"},{"name":"token","type":{"option":["AEX9Interface"]}}],"name":"requestToken","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"proposalId","type":"int"},{"name":"inFavor","type":"bool"}],"name":"vote","payable":false,"returns":{"tuple":[]},"stateful":true},{"arguments":[{"name":"proposalId","type":"int"}],"name":"executeProposal","payable":false,"returns":{"tuple":[]},"stateful":true}],"kind":"contract_main","name":"SmartDao","payable":true,"state":{"record":[{"name":"id","type":"int"},{"name":"proposalCounter","type":"int"},{"name":"requestCounter","type":"int"},{"name":"proposals","type":{"map":["int","SmartDao.proposal"]}},{"name":"members","type":{"map":["address","bool"]}},{"name":"tokenContract","type":"TokenContract"},{"name":"tokenRequests","type":{"map":["int","SmartDao.tokenRequest"]}},{"name":"disputes","type":{"map":["int","SmartDao.dispute"]}},{"name":"parent","type":"GuardInterface"},{"name":"metadata","type":"string"},{"name":"requiredPercentage","type":"int"}]},"typedefs":[{"name":"proposal","typedef":{"record":[{"name":"id","type":"int"},{"name":"description","type":"string"},{"name":"forVotes","type":"int"},{"name":"againstVotes","type":"int"},{"name":"executed","type":"bool"},{"name":"flowId","type":"string"},{"name":"votes","type":{"map":["address","bool"]}}]},"vars":[]},{"name":"tokenRequest","typedef":{"record":[{"name":"id","type":"int"},{"name":"validator","type":"address"},{"name":"tokenAddress","type":{"option":["AEX9Interface"]}},{"name":"amount","type":"int"}]},"vars":[]},{"name":"dispute","typedef":{"record":[{"name":"endsAt","type":"int"},{"name":"description","type":"string"},{"name":"validatorForVotes","type":"int"},{"name":"validatorAgainstVotes","type":"int"},{"name":"requestId","type":"int"},{"name":"isEnded","type":"bool"},{"name":"votes","type":{"map":["address","bool"]}}]},"vars":[]}]}}]

export default smart_dao