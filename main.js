//Swiper component
let swiper = new Swiper(".mySwiper", {
    pagination: { 
    el: ".swiper-pagination", 
    dynamicBullets: true,
    
  },
    // effect: 'fade',
    effect: 'coverflow',
    // slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
      },
  });

//Get data
const getData = async () =>{
    address = 'https://api.artic.edu/api/v1/artworks/' + a
    let response = await axios.get(address)// on click id should register here in url
    console.log(response.data)
    return response.data
}

//Create constants to hold DOM Elements
const DOM_Elements = {
    ranger_list : '.ranger-list',
}
const DOM_Elements2 = {
  ranger_list2 : '.ranger-list-2'
}
const DOM_Elements3 = {
  ranger_list3 : '.ranger-list-3'
}
const DOM_Elements4 = {
  ranger_list4 : '.ranger-list-4'
}
const DOM_Elements5 = {
  ranger_list5 : '.ranger-list-5'
}
const DOM_Elements6 = {
  ranger_list6 : '.ranger-list-6'
}

//Create the Ranger list HTML
const create_list = (key, title, description) =>{
  switch(a){
    case '181':
      const html  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
      //Inserts HTML code into a specified position.
      document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend',html) 
    
    case '616':
         const html2  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
      //Inserts HTML code into a specified position.
      document.querySelector(DOM_Elements2.ranger_list2).insertAdjacentHTML('beforeend',html2) 

    case '100830':
        const html3  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
     //Inserts HTML code into a specified position.
     document.querySelector(DOM_Elements3.ranger_list3).insertAdjacentHTML('beforeend',html3) 
  
    case '73216':
      const html4  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
   //Inserts HTML code into a specified position.
      document.querySelector(DOM_Elements4.ranger_list4).insertAdjacentHTML('beforeend',html4)   
    
    case '145289':
        const html5  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
     //Inserts HTML code into a specified position.
        document.querySelector(DOM_Elements5.ranger_list5).insertAdjacentHTML('beforeend',html5)
        
    case '158':
        const html6  = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${key}"> ${title.bold()} ${description}</a> `
       //Inserts HTML code into a specified position.
        document.querySelector(DOM_Elements6.ranger_list6).insertAdjacentHTML('beforeend',html6)  

      
  }
}

//Functions to load data and display the HTML
const load_data = async () =>{
    const rangers = await getData() 
    let dict = Object.values(rangers)[0]
    for (let key in dict) {
        if (key == 'title'){
            title = dict[key]
        }
        if (key == 'description'){
          description = dict[key]
          create_list(key, title, description)
      }
    }
}


// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
var modal3 = document.getElementById("myModal3")
var modal4 = document.getElementById("myModal4")
var modal5 = document.getElementById("myModal5")
var modal6 = document.getElementById("myModal6")
// Get the button/image that opens the modal
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

// Get the <span> element that closes the modal
var span = document.getElementById("close");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");
// var span3 = document.getElementsByClassName("close3")[0];


// Functions run when specific image is clicked
img.onclick = function(){
  a = '181'
  document.querySelector(DOM_Elements.ranger_list).innerHTML = ''
  load_data()
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
    } 
}

img2.onclick =  function(){
  a = '616'
  document.querySelector(DOM_Elements2.ranger_list2).innerHTML = ''
  load_data()
  modal2.style.display = "block";
  span2.onclick = function() {
    modal2.style.display = "none";
    }
}

img3.onclick =  function(){
  a = '100830'
  document.querySelector(DOM_Elements3.ranger_list3).innerHTML = ''
  load_data()
  modal3.style.display = "block";
  span3.onclick = function() {
    modal3.style.display = "none";
    }
}

img4.onclick =  function(){
  a = '73216'
  document.querySelector(DOM_Elements4.ranger_list4).innerHTML = ''
  load_data()
  modal4.style.display = "block";
  span4.onclick = function() {
    modal4.style.display = "none";
    }
}

img5.onclick =  function(){
  a = '145289'
  document.querySelector(DOM_Elements5.ranger_list5).innerHTML = ''
  load_data()
  modal5.style.display = "block";
  span5.onclick = function() {
    modal5.style.display = "none";
    }
}
img6.onclick =  function(){
  a = '158'
  document.querySelector(DOM_Elements6.ranger_list6).innerHTML = ''
  load_data()
  modal6.style.display = "block";
  span6.onclick = function() {
    modal6.style.display = "none";
    }
}
