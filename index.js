import express from "express"
import godRouter from "./routes/godRouter.js";
import heroRouter from "./routes/heroRouter.js";


const app = express();
const PORT = 3000;

app.set("view engine", "ejs")

app.use(express.static("public"))



app.get("/", (req, res) => { //this means wwww.greek mythology.com
    // res.send("yassou to my Greek Mythology Website!")
    res.render("pages/home", {
        paragraphUnderline: true,
        headTitle: "Greek Mythology",
        title: "Sree's Page on Greek Mythology",
        subtitle: "Learn about Gods and heroes!",
        pageType: "home"
    })
})

app.use("/gods", godRouter)
app.use("/heroes", heroRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))