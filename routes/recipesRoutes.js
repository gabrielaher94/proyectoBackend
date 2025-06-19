const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
const{getALLRecipes, createRecipes, updateRecipes, deleteRecipes}=require('../controllers/recipesController');
const router = express.Router();

router.get("/allRecipes",getALLRecipes);
router.post("/newRecipes",createRecipes);
router.put("/update/:id", updateRecipes);
router.delete("/delete/:id", deleteRecipes);


module.exports = router;



