const express = require('express');
const{getALLRecipes, createRecipes, updateRecipes, deleteRecipes}=require('../controllers/recipesController');
const router = express.Router();

router.get("/allRecipes",getALLRecipes);
router.post("/newRecipes",createRecipes);
router.put("/updateRecipes/:id", updateRecipes);
router.delete("/deleteRecipes/:id", deleteRecipes);


module.exports = router;



