//user click button
//consume an api
//send back random image to html

let img = document.getElementsByTagName("img");
img[0].setAttribute ("src", "https://images.dog.ceo/breeds/hound-afghan/n02088094_1357.jpg"
);
img[0].style.width = "300px";
img[0].style.height = "300px";    

//accesing button element and all its methods
let button = document.getElementsByTagName("button");
//assing a listener for a click on the button
button[0].addEventListener("click", () => {
  //consume api   1) need endpoint - https://dog.ceo/api/breeds/image/random
  //              2) JSON/XML - JSON
  //              3) how much data - 1 object
  //              4) what data look like - message(image) & success

  //http request  1) utilize the endpoint with correct method(verb)
  //              2) get a response: if ok, parse data else - error
  //              3) do something with the parsed data
  //              4) handle the error

  //1 utilize the URL
  const baseURL = "https://dog.ceo/api/breeds";
  let route = "image/random";
  let endpoint = `${baseURL}/${route}`;
  fetch(endpoint)
    .then((response) => {
      console.log(response);

      //2 Get a response
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Wrong!");
      }
    })

    //3 do somethign with parsed data
    .then((data) => {
      img[0].setAttribute("src", data.message);
      img[0].style.width = "300px";
      img[0].style.height = "300px";    

      console.log(data);
    })

    //4 Handle Error
    .catch((err) => {
      console.log(err);
    });
});
