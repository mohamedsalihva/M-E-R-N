// function success_function(responseData) {
//     return {
//       statusCode: responseData.statusCode ||200,
//       data: responseData.data || null,
//       message: responseData.message|| "success"
//     };
    

//   }
//   function error_function(responseData) {
//     return {
//       statusCode: responseData.statusCode ||404,
//       data: responseData.data || null,
//       message: responseData.message|| "FAILED"
//     };
    

//   }


async function loginForm() {

    try{
        const name = document.getElementById('name').value
        console.log("name:",name);

      const email = document.getElementById('email').value
      console.log("email:",email);
    
    
      const password = document.getElementById('password').value
      console.log("password:",password);
    
    
    let data ={
        name,
        email,
        password,
    }
    let json_data = JSON.stringify(data);

            let response = await fetch('/login', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: json_data,
            });
        
            if (!response.ok) {
              throw new Error('Form submission failed');
            }
        
            let responseData = await response.json();
                   let token = responseData.data;
                   console.log("token:", token);
    
            //   success_function({
            //     statusCode: 200,
            //     data:token,
            //     message:"login success",
                
            // })
            localStorage.setItem("token",token);
        
    
            alert('Form submitted successfully');
            
        // res.status( successfunction.statusCode).send( successfunction);
        return;
    
            
          } catch (error) {
            console.log("Error:", error);
            // error_function({
            //   statusCode : 501,
            //   message:"something went wrong"
            // })
            // res.status(errorfunction.statusCode).send(errorfunction);
            alert('Form submission failed');
          }
         
        }