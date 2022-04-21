//Define UI Element
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();
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
            ui.showProfile(data)

        };

       });
       
  }else{
    //Clear Profile

  };



});