//Define UI Element
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

// Add Event Liteners

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if(userText != ""){
     //Fetch API
     fetch(`https://api.github.com/users/${userText}`)
       .then(result => result.json())
       .then(data =>{
             
        if(data.message=="Not Found"){
            //show Alert
        }else{
            //show profile

        };

       });
       
  }else{
    //Clear Profile

  };



});