import express from "express";
import Heroes  from "../data/heroes.js";

const heroRouter = express.Router();

heroRouter.get("/", (req, res) => {
    res.render("pages/featurePage", {
        headTitle: "Greek Heroes",
        bodyClass: "heroes",
        title: "Welcome to the Heroes page",
        subtitle: "Meet the legendary figures of Greek Mythology!!!!!!!",
        pageType: "heroes"
    })
})

heroRouter.get("/hercules", (req, res) => {
    let hercules = Heroes[0];
    res.render('pages/hero', {
        headTitle: Heroes[0].namename,
        title:  hercules.name,
        subtitle: "Info about  hero page",
        hero: hercules
    })

})

heroRouter.get("/odysseus", (req, res) => {
    res.send("Seen any golden sheep?")
})

export default heroRouter