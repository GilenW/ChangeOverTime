


// alert("test")
// const America = document.getElementById('America');
// console.log(America);
// America.onclick = function click(){
//     Event.preventDefault()
//     console.log('hello')
// }

// const button = document.getElementById('btn');
// console.log(button); // 👉️ button#btn

// // ✅ Works
// button.onclick = function click() {
//   console.log('Button clicked');
// };




//start from here

let card = document.querySelector(".card");
let notice = document.querySelector("#notice");
card.style.display = "none";
let cardStatus = false;
let selectStatus = false;

var selectedCountry = 'USA';


$(function(){
    $('[id*=Place_').on('click',function(){
        
       
        notice.style.display = 'block';
        document.getElementById('pred').style.display = 'none';

        let Place = $(this)
        let placeID = $(this).get(0).id
        let Allplaces = $('[id*=Place_')

        const Place2 = document.getElementById(placeID);
        const nameAttribute = Place2.getAttribute('name');

        Allplaces.css('fill','##FACAC')
        Place.css('fill','583C87')


        if(cardStatus == true){
            // Brazil.css('fill','rgb(15, 72, 72)')
            hideCard();
        }
        else{
            //Brazil.css('fill','#cc7722')
            showCard();
            $('#placeName').text(nameAttribute);
            selectStatus = true;

        }

        placeID = placeID.replace('Place_','');

       
        console.log(nameAttribute);
        selectedCountry = placeID;

    })


})



$(function(){
    
    $('*[class^="Place_"]').on('click',function(){
        
        let Place = $(this)
        var nameAttribute = $(this).attr('class');
        let Allplaces = $('*[class^="Place_"]')
        if(selectStatus == true){
            Allplaces.css('fill','#FFACAC')
        }

        
        nameAttribute = nameAttribute.replace('Place_','');

        
        Place.css('fill','583C87')


        if(cardStatus == true){
            // Brazil.css('fill','rgb(15, 72, 72)')
            hideCard();
        }
        else{
            //Brazil.css('fill','#cc7722')
            showCard();
            $('#placeName').text(nameAttribute);

        }

        

    })

})




function hideCard(){
    card.style.display = "none";
    cardStatus = false;
}

function showCard(){
    card.style.display = "block";
    cardStatus = true;
    
}


// API

function clicked() {
    let userInput = document.getElementById('user-num-input').value;
    notice.style.display = "none";
    document.getElementById('pred').style.display = 'block';
    userInput = parseFloat(userInput);
    fetch(
        'https://api.mage.ai/v1/predict',
        {
            body: JSON.stringify({
                "api_key": "AApe5XnnybWTwLuGxss0VBcBeOXelVv5itRbQK1b",
                "features": [{
                    "tree_loss_median": userInput,
                    "countrycode": selectedCountry
                }],
                "model": "custom_prediction_regression_1649548158277",
                "version": "2",
                "bypass_experiment": true,
                "test": true
            }),
            method: 'POST',
        },
    ).then(response => response.json()).then(response => {
        console.log(response);

        document.getElementById('pred').textContent = response[0].prediction;

    })

    console.log(userInput);
}

window.addEventListener('DOMContentLoaded', function () {
    console.log("hello")
    document.getElementById("btn").addEventListener("click", clicked);
    
});


