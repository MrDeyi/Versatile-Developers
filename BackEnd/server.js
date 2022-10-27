const { async } = require('@firebase/util');
const express = require('express');
const app = express();
const port = process.env.port|| 4000;
const {db} = require('./config.js');
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
const User = {
    "name":"Mosis",
    "Surname":"Mdlalose",
    "Age":"19"
}

//Create a User
app.post('/RegisterUser',async(req,res)=>{
    try{
        const id = req.body.uid
        const UserJson = {
            uid:req.body.uid,
            email:req.body.email,
            username:req.body.username,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            orgname:req.body.orgname,
            location:req.body.location,
            phonenumber:req.body.phonenumber,
            birthday:req.body.birthday,
            displayName:req.body.displayName,
            photoURL: req.body.photoURL,
        };
        const response = await db.collection("users").doc(id).set(UserJson);
        res.send(response);
    }catch(error){
        res.send(error);
    }
})

//Post Events
app.post('/Event',async(req,res)=>{
    try{
        // const id = req.body.id;
        const EventJason = {
            id: req.body.id,
            person_img: req.body.person_img,
            person_name: req.body.person_name,
            person_role: req.body.person_role,
            event_img: req.body.event_img,
            event_title: req.body.event_title,
            month: req.body.month,
            date: req.body.date,
            dayname: req.body.dayname,
            time: req.body.time,
            description: req.body.description,
            participants: req.body.participants,
            likes: req.body.likes,
            share: req.body.share
        };
        const response = db.collection("Events").add(EventJason);
        res.send(response);
    }catch(error){
        res.send(error);
    }
})

//Post Contacts
app.post('/Contact',async(req,res)=>{
    try{
        const ContactJson = {
            id : req.body.id,
            username : req.body.name,
            photo : req.body.photo

        };
        const respose = db.collection("Contacts").add(ContactJson);
        res.send(respose);
    }
    catch(error){
        res.send(error);
    }
})


//Friends
app.post('/Friend',async(req,res)=>{
    try{
        const ContactJson = {
            id : req.body.id,
            username : req.body.name,
            photo : req.body.photo

        };
        const respose = db.collection("Friend").add(ContactJson);
        res.send(respose);
    }
    catch(error){
        res.send(error);
    }
})

//Post Groups
app.post('/Groups',async(req,res)=>{
    try{
        const ContactJson = {
            id : req.body.id,
            username : req.body.name,
            photo : req.body.photo

        };
        const respose = db.collection("Groups").add(ContactJson);
        res.send(respose);
    }
    catch(error){
        res.send(error);
    }
})
//Get All Events
app.get('/GetEvents',(req,res)=>{
    (async()=>{
        try{
            let response = [];
            await db.collection("Events").get().then(QuerySnapshot=>{
                let docs  = QuerySnapshot.docs;

                for(let doc of docs){
                    response.push(doc.data());
                }
                return res.status(200).send(response);
            })
        }catch(error){
            return res.status(500).send(error);
        }
    })()
})

//Get All Contacts 
app.get('/GetContacts',(req,res)=>{
    (async()=>{
        try{
            let response = [];
            await db.collection("Contacts").get().then(QuerySnapshot=>{
                let docs = QuerySnapshot.docs;
                for(let doc of docs){
                    response.push(doc.data());
                }
                return res.status(200).send(response);
            })
        }catch(error){
            return res.status(500).send(error);
        }
    })()
})


// get all friends
app.get('/GetFriend',(req,res)=>{
    (async()=>{
        try{
            let response = [];
            await db.collection("Friend").get().then(QuerySnapshot=>{
                let docs = QuerySnapshot.docs;
                for(let doc of docs){
                    response.push(doc.data());
                }
                return res.status(200).send(response);
            })
        }catch(error){
            return res.status(500).send(error);
        }
    })()
})

app.get('/GetGroup',(req,res)=>{
    (async()=>{
        try{
            let response = [];
            await db.collection("Groups").get().then(QuerySnapshot=>{
                let docs = QuerySnapshot.docs;
                for(let doc of docs){
                    response.push(doc.data());
                }
                return res.status(200).send(response);
            })
        }catch(error){
            return res.status(500).send(error);
        }
    })()
})
//Get all Users
app.get('/',(req,res)=>{
    (async()=>{
        try{
            let response = []
            await db.collection("users").get().then(QuerySnapshot=>{
                let docs = QuerySnapshot.docs;

                for(let doc of docs){
                    response.push(doc.data())
                }
                return res.status(200).send(response)
            })
        }catch(error){
            return res.status(500).send(error)
        }
    })()
})

//Get User
app.get("/:id",(req,res)=>{
    (async()=>{
        try{
            const userRef = db.collection("users").doc(req.params.id);
            const response = await userRef.get();
            res.send(response.data());
        }catch(error){
            res.send(error)
        }
    })()
})

//Update User
app.post('/UpdateUser',async(req,res)=>{
    try{
        const id = req.body.email
        const UserJson = {
            email:req.body.email,
            username:req.body.username,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            orgname:req.body.orgname,
            location:req.body.location,
            phonenumber:req.body.phonenumber,
            birthday:req.body.birthday
        };
        const response =await db.collection("users").doc(id).set(UserJson);
        res.send(response);
    }catch(error){
        res.send(error);
    }
})

//Delete User
app.delete('/DeleteUser/:id',async(req,res)=>{
    try{
        const response = await db.collection("users").doc(req.params.id).delete();
        res.send(response);
    }catch(error){
        res.send(error);
    }
})

//App listen
app.listen(port,()=>{
    console.log("We are running baby", port)
})