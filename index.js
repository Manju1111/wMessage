const express= require('express');
const app = express();
const bodyParser =require('body-parser');
const PORT=5001;
const cors = require('cors');


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

const { Client} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
console.log('okkkkkkkk')



const client = new Client();
 


client.on('qr', (qr) => {
    //console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});
 

var myGroup;

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then((chats)=>{
        console.log(chats[0]);
        myGroup = chats.find(
            chat => chat.name ==='Automation Whatsapp'
        );
        // client.sendMessage(
        //     myGroup.id._serialized,
        //     "*auto Genarated Message.....outside!!!*"
        // );
// setTimeout(()=>{ client.sendMessage(
//     myGroup.id._serialized,
//     "TimeOut funtion after 3Sec ... Welcome!"
// );
// }, 10000);

       console.log(chats[0]);
        });
    });  




app.get('/helloworld',async(req,res)=>{

    async function newFun(){
        console.log('hellowordld started..',req.query["ID"])
 client.sendMessage(
            myGroup.id._serialized,
            `*auto send UserName is : ${req.query["ID"]}*`
        );

   res.send('hellowordld on Web live')
console.log('heelowword running')
    }

    newFun();
});

   

client.initialize();


app.get('/',(req,res)=>{
    res.send('Hellow on Web live')
})


app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`)
})



