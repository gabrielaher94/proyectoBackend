const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
const{getALLRecetas}=require('../controllers/recetasController');
const{createRecetas}=require('../controllers/recetasController');
const router = express.Router();

router.get("/allRecetas",getALLRecetas);
router.post("/newRecetas",createRecetas);


module.exports = router;



