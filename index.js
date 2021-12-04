const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello')
});

const projects = [
    {
        id:0,
        title:"Tourism website" ,
        description:"Its an demo website of tourism created using reactJS, plain css and bootstrap",
        features1:"-Guest users can see home, about & contact us pages." ,
        features2:"-Only registered account holders can order us they can see other 2 routes namely packages and orders." ,
        features3:"-Our user can see the order list and also remove his/her order easily." ,
        image1: "https://trusting-liskov-cca2cd.netlify.app/image/Capture8.PNG",
        image2:"https://trusting-liskov-cca2cd.netlify.app/image/Capture9.PNG",
        image3:"https://trusting-liskov-cca2cd.netlify.app/image/Capture10.PNG" ,
        image4: "https://trusting-liskov-cca2cd.netlify.app/image/Capture11.PNG"
    },
    {
        id:1,
        title:"General Hospital" ,
        description:"Its an demo website of tourism created using reactJS, plain css and bootstrap",
        features1:"-Guest users can see home, about & contact us pages." ,
        features2:"-Only registered account holders can order us they can see other 2 routes namely packages and orders." ,
        features3:"-Our user can see the order list and also remove his/her order easily." ,
        image1:"https://trusting-liskov-cca2cd.netlify.app/image/Capture4.PNG",
        image2:"https://trusting-liskov-cca2cd.netlify.app/image/Capture7.PNG",
        image3:"https://trusting-liskov-cca2cd.netlify.app/image/Capture6.PNG" ,
        image4:"https://trusting-liskov-cca2cd.netlify.app/image/Capture5.PNG"
    
    },
    {
        id:1,
        title:"Niche Product website" ,
        description:"Its an demo website of niche product created using reactJS, plain css and bootstrap.this websites includes, firebase-authentication and mongodb database funtionality.",
        features1:"-Demo of a niche product website, users can see our products." ,
        features2:"-User can order their product and also manage their order by signing into websites and can add the review of products." ,
        features3:"-Admin can add service, manage all orders, add products and make user admin." ,
        image1:"https://trusting-liskov-cca2cd.netlify.app/image/Capture1.PNG",
        image2:"https://trusting-liskov-cca2cd.netlify.app/image/Capture.PNG",
        image3:"https://trusting-liskov-cca2cd.netlify.app/image/Capture2.PNG" ,
        image4:"https://trusting-liskov-cca2cd.netlify.app/image/Capture3.PNG"
    
    } 
]

app.get('/projects',(req,res)=>{
    res.send(projects);
})
app.get('/projects/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const project = projects[id];
    res.send(project);
})


app.listen(port,()=>{
    console.log('listening to port',port)
})