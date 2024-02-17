function success_function(responseData) {
  return {
    statusCode: responseData.statusCode ||200,
    data: responseData.data || null,
    message: responseData.message|| "success"
  };
  

}
function error_function(responseData) {
  return {
    statusCode: responseData.statusCode ||404,
    data: responseData.data || null,
    message: responseData.message|| "failed"
  };
  

}
async function login() {
  try {

      const email = document.getElementById('email').value;
      console.log("email:", email);

      const password = document.getElementById('password').value;
      console.log("password:", password);

      let data = {
          email,
          password,
      };
      let json_data = JSON.stringify(data);

      let response = await fetch('http://localhost:3001/login', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: json_data,
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Login failed');
      }

      let responseData = await response.json();
      let token = responseData.data;
      console.log("token:", token);

      localStorage.setItem("token", token);

      alert('Login successful');
      return { statusCode: 200, data: token, message: "Login success" };

  } catch (error) {
      console.log("Error:", error);
      alert('Login failed');
      return { statusCode: 404, message: "Something went wrong" };
  }
}

// async function login() {
//   try {
//       const name = document.getElementById('name').value;
//       console.log("name:", name);

//       const email = document.getElementById('email').value;
//       console.log("email:", email);

//       const password = document.getElementById('password').value;
//       console.log("password:", password);

//       let data = {
//           name,
//           email,
//           password,
//       };
//       let json_data = JSON.stringify(data);

//       let response = await fetch('/login', {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: json_data,
//       });

//       if (!response.ok) {
//           throw new Error('log in failed');
//       }

//       let responseData = await response.json();
//       let token = responseData.data;
//       console.log("token:", token);

//       localStorage.setItem("token", token);
      
//       alert('log in success');

//       const successfunction = success_function({
//           statusCode: 200,
//           data: token,
//           message: "login success",
//       });
//       return successfunction;

//   } catch (error) {
//       console.log("Error:", error);
//       alert('log in failed');
      
//       const errorfunction = error_function({
//           statusCode: 404,
//           message: "something went wrong"
//       });
//       return errorfunction;
//   }
// }
