import React from 'react'
import Dao from '../components/Dao';
import { Box, Grid } from '@mui/material'
import Creater from '../components/Creater';
import creater1 from './../assets/images/creater1.png'
import creater2 from './../assets/images/creater2.jpeg'


const Dashboard = () => {
    return (
        <React.Fragment>
            <Box sx={{ margin: '30px 0px' }}>
                <Dao />
            </Box>
            <Box sx={{ padding: '0px 8rem' }}>
                <Grid container columnSpacing={{ md: 4, xl: 3.8 }}>
                    <Grid item xs={12} md={6} xl={6}>
                        <Creater title='Create your first proposal'
                            image={creater1}
                            description='Get your community involved in the decision-making process. Learn more in our proposal guide'
                            btnTitle='Create Proposal'
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                        <Creater title='Initiate a token transfer'
                            image={creater2}
                            description='Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to distribute your community s token'
                            btnTitle='Initiate transfer'
                        />
                    </Grid>
                </Grid>
                <Box sx={{ padding: '30px 20px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at magnam obcaecati ut labore tenetur repudiandae unde aut dignissimos consequatur architecto minus laborum corporis, vel, saepe repellendus. Labore quidem, ratione culpa rerum libero dignissimos deleniti? Corrupti architecto illo facilis harum perferendis debitis cum, ipsa odit quod accusamus voluptate ad sapiente fuga ipsam labore porro error adipisci impedit. Asperiores vero nesciunt minima praesentium, laudantium repellendus, magni architecto quaerat odit tenetur aliquid perferendis deserunt sunt molestiae veritatis consectetur beatae quibusdam voluptates! Nesciunt asperiores laborum similique dolorum optio aliquam corrupti mollitia velit, vitae alias quibusdam tempore vero? Asperiores eligendi, delectus, quia nesciunt iusto temporibus expedita quaerat facilis excepturi est autem, commodi hic quo rem suscipit dolorem blanditiis odio. Quia perferendis iste dolores possimus. Maxime aliquid molestias velit necessitatibus eveniet nostrum omnis quas quasi deserunt eum alias repudiandae itaque numquam a optio sint est similique nobis iusto aspernatur illo nulla, adipisci quia delectus. Placeat, a consequuntur! Hic corporis rem perferendis commodi animi quaerat officia molestias tenetur odio ex, accusantium nesciunt deleniti neque, soluta nam exercitationem libero natus tempore saepe. Autem necessitatibus laboriosam reprehenderit ex quas ratione praesentium tenetur asperiores hic delectus, similique labore repellendus eligendi deserunt voluptatem ducimus dolorum velit a placeat suscipit eveniet! Dolor, eveniet. Nam harum quae vero eligendi! Aspernatur autem sunt soluta error, perferendis a architecto dolorem aperiam quam dignissimos hic obcaecati. Magni ipsam eos perspiciatis cum dicta porro ex corporis iusto provident ratione nesciunt doloremque soluta minima voluptate dolorem inventore odio placeat voluptatibus nostrum, perferendis nulla est optio quod sint. Eligendi rerum id, quis doloribus dolores numquam voluptate in optio expedita tempore saepe, provident totam placeat dicta velit labore accusantium iusto quas blanditiis. Possimus cum officia, velit placeat ad vero, temporibus expedita cumque architecto aliquid nisi quidem nesciunt ipsa soluta nemo reiciendis numquam est illo! Sint perferendis accusantium officiis, obcaecati, dolores ipsum illum, atque aut ipsa repellendus facere neque consequuntur tempore asperiores ab quos natus nesciunt fugit est maiores quae ad ut nostrum? Ducimus soluta repellat iste, culpa rem nisi excepturi laboriosam provident libero laborum voluptate earum doloribus commodi? Cupiditate accusamus, rerum facilis reprehenderit eaque fuga eveniet. Placeat quam fuga incidunt esse, mollitia, doloremque pariatur quos nemo cum ipsum nobis quas facere officiis exercitationem commodi est voluptates. Nemo deleniti fuga sapiente tempore earum consectetur non recusandae, perferendis quasi quo blanditiis laborum amet est at consequatur corrupti a dolores sequi autem magni dolorum ducimus illum. Sunt quas harum asperiores quisquam saepe itaque veritatis laudantium reiciendis iure corporis! Delectus, dicta commodi ipsum quo temporibus error cupiditate molestiae eius molestias tempore expedita deserunt accusamus. Facere quae in at impedit, nemo consequatur recusandae vero corporis excepturi aspernatur mollitia a velit eligendi dolorum. Pariatur, iste harum. Incidunt harum quaerat ducimus dolore laborum a! Fugiat vitae porro commodi ipsam laudantium atque. Possimus praesentium deleniti, dolores in autem, rerum molestias cumque dolorem voluptatem consequuntur eos est ipsam quidem dolore quis a deserunt laudantium maxime suscipit impedit similique? Veniam temporibus ea eos culpa et ipsam dolorem adipisci nesciunt asperiores consectetur inventore, natus quisquam tempore? Qui laudantium laborum corrupti.
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Dashboard;