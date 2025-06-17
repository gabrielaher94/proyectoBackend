const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
const{getALLRecetas, createRecetas, updateRecetas, deleteRecetas}=require('../controllers/recetasController');
const router = express.Router();

router.get("/allRecetas",getALLRecetas);
router.post("/newRecetas",createRecetas);
router.put("/update/:id", updateRecetas);
router.delete("/delete/:id", deleteRecetas);


module.exports = router;



