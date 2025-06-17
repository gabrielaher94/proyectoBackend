const { createClient } = require("@supabase/supabase-js");


const supabaseAnonClient=createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY

);

exports.getALLRecetas= async(req,res)=>{
    try{
    const{data, error}= await supabaseAnonClient
    .from("recetas")
    .select("*");
    if (error) throw error;
    res.status(200).json({data});
    }catch(err){
        res.status(err.status|| 500).json({error: err.message});
    }
    return res;
};
exports.createRecetas= async(req, res)=>{
    try{
    const{title,ingredients,preparation,image}=req.body;
    const{data, error}= await supabaseAnonClient
    .from("recetas")
    .insert({title,ingredients,preparation,image});
    }catch(err){
        res.status(err.status||500).json({error: err.message});
    }
    return res;
};
exports.updateRecetas= async(req, res)=>{
    try {
    const { id } = req.params;
    const { title, author, description, publication_year } = req.body;

    const { data, error } = await supabaseAnonClient
      .from("recetas")
      .update({ title,ingredients,preparation,image  })
      .eq("id", id);

    if (error) throw error;
    res.status(200).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteRecetas= async(req, res)=>{
    try {
    const { id } = req.params;
    const { error } = await supabaseAnonClient
      .from("recetas")
      .delete()
      .eq("id", id);

    if (error) throw error;
    res.status(204).send(); // No content en response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};




