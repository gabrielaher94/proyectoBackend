const { createClient } = require("@supabase/supabase-js");


const supabaseAnonClient=createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY

);

exports.getALLRecipes= async(req,res)=>{
    try{
    const{data, error}= await supabaseAnonClient
    .from("recipes")
    .select("*");
    if (error) throw error;
    res.status(200).json({data});
    }catch(err){
        res.status(err.status|| 500).json({error: err.message});
    }
    return res;
};
exports.createRecipes= async(req, res)=>{
    try{
    const{title,ingredients,preparation,image}=req.body;
    const{data, error}= await supabaseAnonClient
    .from('recipes')
    .insert({title,ingredients,preparation,image});
    }catch(err){
       return res.status(err.status||500).json({error: err.message});
    }
    return res;
};
exports.updateRecipes= async(req, res)=>{
    try {
    const { id } = req.params;
    const { title, ingredients, preparation,image } = req.body;

    const { data, error } = await supabaseAnonClient
      .from("recipes")
      .update({ title,ingredients,preparation,image  })
      .eq("id", id);

    if (error) throw error;
    res.status(200).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteRecipes= async(req, res)=>{
    try {
    const { id } = req.params;
    const { error } = await supabaseAnonClient
      .from("recipes")
      .delete()
      .eq("id", id);

    if (error) throw error;
    res.status(204).send(); // No content en response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};




