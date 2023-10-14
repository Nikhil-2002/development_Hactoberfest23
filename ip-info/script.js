const url = "https://ipapi.co/json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#apiData").innerHTML = data.ip;
  })
  .catch((err) => console.log(err));
