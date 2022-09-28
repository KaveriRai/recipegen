let btns = document.querySelectorAll('#btn');
var filters = [];

console.log(document.body);
if(document.body.id == "p2") {
  console.log("on p2");
  for (i of btns) {
    i.addEventListener('click', function() {
      if (this.style.backgroundColor === '' ||
          this.style.backgroundColor === 'tan' ) {
            this.style.backgroundColor = 'seagreen';
            this.style.color = 'tan';
            filters.push(this.innerText);
            console.log(filters);
      }
      else {
        this.style.backgroundColor = 'tan';
        this.style.color = 'seagreen';
        var i = 0;
        while (i < filters.length) {
          if (filters[i] === this.innerText) {
          filters.splice(i, 1);
          } 
          else {
            ++i;
          }
        }
        console.log(filters);
      }
    });
  }

  document.getElementById("goBtn").addEventListener('click', function() {
    localStorage.setItem("filters", JSON.stringify(filters));
  });

}

var inputSearch = '';
if (document.body.id == "p3") {
  console.log(JSON.parse(localStorage.getItem('filters')));

  document.getElementById("searchBtn").addEventListener('click', function() {
    localStorage.setItem("inputSearch", document.getElementById("inputSearch").value);
    console.log(localStorage.getItem('inputSearch'));
  });
  
  var searchBar = document.getElementById("buttons");
  var backBtn = document.createElement("button");
  backBtn.innerHTML = "< Back";
  backBtn.id = "goBtn";
  searchBar.appendChild(backBtn);
  backBtn.style.marginTop = "20px";
  backBtn.style.marginRight = "-20%";
  backBtn.addEventListener("click", function () {
    window.location ="page2.html"
  });
}

if (document.body.id == "p4") {

  console.log(localStorage.getItem('inputSearch'));
  console.log(JSON.parse(localStorage.getItem('filters')));
  document.getElementsByName("search")[0].placeholder = localStorage.getItem('inputSearch');
  document.getElementsByName("search")[0].style.marginBottom = "10px";
  
}


// Create a request variable and assign a new XMLHttpRequest object to it.
//var apirequest = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
//apirequest.open('GET', 'https://api.spoonacular.com/recipes/random?apiKey=6daed6705f3243a186ab86637d578132', true)

//apirequest.onload = function () {
  // Begin accessing JSON data here
  //var data = JSON.parse(this.response)
  //console.log(data)
//}

// Send request
//apirequest.send()


if (document.body.id == "p4") {
  var requestlink = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=d7c9e1e8f19b4fada360b30e256bc505'
  requestlink += "&query=" + localStorage.getItem('inputSearch');

  for (i of JSON.parse(localStorage.getItem('filters'))) {
    if (i == "vegan" || i == "vegetarian" || i == "gluten free" || i =="lowFodmap" || i=="ketogenic") {
      requestlink += "&diet=" + i;
    }
    else if (i == "seafood only") {
      requestlink += "&diet=pescetarian"
    }
    else if (i == "sugar free") {
      requestlink+="&excludeIngredients=sugar";
    }
    else if (i == "nut free") {
      requestlink += "&intolerances=Peanut, Tree Nut"
    }
    else if (i == "white meat") {
      requestlink += "&excludeIngredients=red meat, steak, pork, beef"
    }
    var bttn = document.createElement("button");
    bttn.innerHTML = i;
    bttn.id = "btn";
    document.body.appendChild(bttn);
    bttn.style.marginBottom = "-10px";
  //  var element = document.getElementById("btn");
  //  element.appendChild(bttn);
  }
  var backBtn = document.createElement("button");
  backBtn.innerHTML = "< Back";
  backBtn.id = "goBtn";
  document.body.appendChild(backBtn);
  backBtn.style.marginTop = "10px";
  backBtn.addEventListener("click", function () {
    window.location ="page3.html"
  });
  console.log(requestlink);

  var apirequest = new XMLHttpRequest();
  apirequest.open('GET', requestlink);
  apirequest.send();

  apirequest.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    
    if (data["results"].length === 0){
      alert("Invalid Search");
      window.location.href = "page3.html";
    }
    
    document.getElementById("pic1").src= data["results"][0]["image"];
    document.getElementById("link1").innerHTML = data["results"][0]["title"];
    var id1 = data["results"][0]["id"];
    var titleText1 = data["results"][0]["title"].replaceAll(' ', '-')
    newLink1 = "https://spoonacular.com/" + titleText1 + '-' + id1;
    document.getElementById("link1").href = newLink1;

    document.getElementById("pic2").src= data["results"][1]["image"];
    document.getElementById("link2").innerHTML = data["results"][1]["title"];
    var id2 = data["results"][1]["id"];
    var titleText2 = data["results"][1]["title"].replaceAll(' ', '-')
    newLink2 = "https://spoonacular.com/" + titleText2 + '-' + id2;
    document.getElementById("link2").href = newLink2;

    document.getElementById("pic3").src= data["results"][2]["image"];
    document.getElementById("link3").innerHTML = data["results"][2]["title"];
    var id3 = data["results"][2]["id"];
    var titleText3 = data["results"][2]["title"].replaceAll(' ', '-')
    newLink3 = "https://spoonacular.com/" + titleText3 + '-' + id3;
    document.getElementById("link3").href = newLink3;

    document.getElementById("pic4").src= data["results"][3]["image"];
    document.getElementById("link4").innerHTML = data["results"][3]["title"];
    var id4 = data["results"][3]["id"];
    var titleText4 = data["results"][3]["title"].replaceAll(' ', '-')
    newLink4 = "https://spoonacular.com/" + titleText4 + '-' + id4;
    document.getElementById("link4").href = newLink4

    document.getElementById("pic5").src= data["results"][4]["image"];
    document.getElementById("link5").innerHTML = data["results"][4]["title"];
    var id5 = data["results"][4]["id"];
    var titleText5 = data["results"][4]["title"].replaceAll(' ', '-')
    newLink5 = "https://spoonacular.com/" + titleText5 + '-' + id5;
    document.getElementById("link5").href = newLink5;

    document.getElementById("pic6").src= data["results"][5]["image"];
    document.getElementById("link6").innerHTML = data["results"][5]["title"];
    var id6 = data["results"][5]["id"];
    var titleText6 = data["results"][5]["title"].replaceAll(' ', '-')
    newLink6 = "https://spoonacular.com/" + titleText6 + '-' + id6;
    document.getElementById("link6").href = newLink6;
  }

}