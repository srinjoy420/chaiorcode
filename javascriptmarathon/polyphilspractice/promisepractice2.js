const { json } = require("stream/consumers");

async function jsonfun(){
    try{
        {
            const api="https://jsonplaceholder.typicode.com/users";
            const response =await fetch(api);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                {
                    
                    const result=await response.json();
                    console.log(result);
                    
                }
            }
            
        }
    }
    catch(error){
        console.error("error:",error);
    }
}
jsonfun()