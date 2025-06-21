const { createClient } = require("@supabase/supabase-js");


const supabaseAnonClient=createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE

);

exports.getALLRecipes= async(req,res)=>{
    try{
    const{data, error}= await supabaseAnonClient
    .from("recipes")
    .select("*");
    if (error) throw error;
    return res.status(200).json({data});
    }catch(err){
       return res.status(err.status|| 500).json({error: err.message});
    }
};
exports.createRecipes= async(req, res)=>{
    try{
    const{image,title,ingredients,preparation}=req.body;
 
    const{data, error}= await supabaseAnonClient
    .from('recipes')
    .insert({image, title, preparation,ingredients})
    .select();
    if (error) throw error;
        return res.status(201).json({ data });
    }catch(err){
       return res.status(err.status||500).json({error: err.message});
    }
};
exports.updateRecipes= async(req, res)=>{
    try {
    const { id } = req.params;
    const { image,title, ingredients, preparation } = req.body;

    const { data, error } = await supabaseAnonClient
      .from("recipes")
      .update({ image,title,ingredients,preparation  })
      .eq("id", id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Receta no encontrada" });
    }
    return res.status(200).json({ data: data[0] });
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
   return res.status(204).send(); // No content en response
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};




