import { createClient } from '@supabase/supabase-js'


const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTYxNzQ1NCwiZXhwIjoxOTQ3MTkzNDU0fQ.hlyAb2l4nmlgAUB1D5dOwQSzoje2dQll8K2MykWNyQg'
const SUPABASE_URL = "https://vbbbczafepovtqjnyyej.supabase.co"

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

export default supabase;



