const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) =>{
//     // console.log(req);
//     console.log('request received');
//     // res.send('this is a basic response');
//     // res.send({
//     //     name: 'asad',
//     //     class:'b.tehch'
//     // });

//     let code = "<h1> Fruits</h1> <ul><li>apple</li> <li>Mango</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res)=>{
    res.send("heloo this is root");
});
// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path");
// });
// app.get("/orange", (req, res)=>{
//     res.send("you contacted orange path");

//     app.get("*",(req, res)=>{
//         res.send("this path does not exist");
//     });
    

// });

app.get("/:username/:id", (req, res)=>{
    let {username,id} = req.params;
    let htmStr = `<h1>welcome to page of @${username}!</h1>`;
    res.send(htmStr);
});


app.get("/search", (req, res)=>{
    let{q} = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>");
    }
    res.send(`<h1>search result for query:${q}</h1>`);
});