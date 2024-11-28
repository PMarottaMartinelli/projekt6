const express = require ("express");
const router = express.Router();
const {leseRinge, leseRingeDetails, insertRezept} = require("../services/mongoservice");

/**
 * @appget ruft die Startseite auf
*/
router.get('/', async (req, res) => {
    let gegenstaende = await leseRinge();
    res.render('item', {gegenstaende: gegenstaende})
});


router.get('/details/:id', async (req, res) => {
    let id = req.params.id
    
    let details = await leseRingeDetails(id);
    res.render('details', {details: details})
    console.log("test details", details)
 });

// router.post('/', async (req, res) => {
//     let Titel = req.body.Titel
//     let Pfad = req.body.Pfad
//     let Rezept ={name: Titel, img: Pfad}
//     await insertRezept(Rezept) 
//}) 
module.exports =
    router