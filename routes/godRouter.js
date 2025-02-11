import express from "express"

const godRouter = express.Router();

godRouter.get("/", (req, res) =>{
    res.render("pages/featurePage", {
        textDecoration: false,
        headTitle: "Greek Gods",
        bodyClass: "gods",
        title: "Welcome to the Gods page",
        subtitle: "Bend the knee, mortals",
        pageType:"gods"
    })
})

godRouter.get("/zeus", (req, res) => {
    res.render("pages/featurePage", {
        textDecoration: false,
        headTitle: "Greek Gods",
        bodyClass: "gods",
        title: "Welcome to the Gods page",
        subtitle: "Bend the knee, mortals",
        pageType:"gods",
       godName: "zeus"
    }) 
})

godRouter.get("/hera", (req, res) => {
    res.render("pages/featurePage", {
        textDecoration: false,
        headTitle: "Greek Gods",
        bodyClass: "gods",
        title: "Welcome to the Gods page",
        subtitle: "Bend the knee, mortals",
        pageType:"gods",
        godName: "hera"
    })
})

export default godRouter
