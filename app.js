


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
card.style.display = "none";
let cardStatus = false;

//constant to get predcition


function reloadPage(){
    document.location.reload();
}

$(function(){
    $('[id*=Place_').on('click',function(){
        
        
        let Place = $(this)
        let placeID = $(this).get(0).id
        let Allplaces = $('[id*=Place_')

        console.log($((placeID)))

        Allplaces.css('fill','rgb(97, 176, 142)')
        Place.css('fill','#cc7722')


        if(cardStatus == true){
            // Brazil.css('fill','rgb(15, 72, 72)')
            hideCard();
        }
        else{
            //Brazil.css('fill','#cc7722')
            showCard();
            

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
 fetch(
        'https://api.mage.ai/v1/predict',
        {
          body: JSON.stringify({
            api_key: 'AApe5XnnybWTwLuGxss0VBcBeOXelVv5itRbQK1b',
            model: 'custom_prediction_regression_1649531439899',
            version: '1',
            features: [{
                "ac": 167,
                "ano_estados": 2009,
                "ma": 828,
                "mt": 1049,
                "pa": 4281,
                "to_": 61
            }],
          }),
          method: 'POST',
        },
      ).then(response=> response.json()).then(response=>{card.innerHTML = response[0].prediction})

      //this is what we are trying to do. 
      //
      
        



