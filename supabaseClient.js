const {createClient} = require("@supabase/supabase-js");
require ('dotenv').config();

const supabaseConn= createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABE_SERVICE_ROLE
);

module.exports = supabaseConn;