const ex=require('express')
const app=ex()
app.use(date=(req,res,next)=>
{ let dt = new Date()
    const h= dt.getHours()
    if((h<8 ) || (h>17))
{res.send("<h1>Our office is not open now </h1>")
console.log("oops")}
next()
}
)
app.get('/',(req,res)=>{
        res.sendFile(__dirname+ '/public/menu.html')
    }
     )

    app.get('/public/home.html',(req,res)=>{
    res.sendFile(__dirname+ '/public/home.html')
    }
    )
    app.get('/public/contact.html',(req,res)=>{
        res.sendFile(__dirname+ '/public/contact.html')
        }
        )
        app.get('/public/ourservices.html',(req,res)=>{
            res.sendFile(__dirname+ '/public/ourservices.html')
            }
            )

var port =process.env.PORT || 2000
app.listen(port,(err)=>{
if(err) console.log("oops !! serveur is not runnig")
else console.log(`server lisining to port : ${port}`)})