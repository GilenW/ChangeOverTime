


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
let selectStatus = false;

//constant to get predcition




$(function(){
    $('[id*=Place_').on('click',function(){
        
        
        let Place = $(this)
        let placeID = $(this).get(0).id
        let Allplaces = $('[id*=Place_')

        const Place2 = document.getElementById(placeID);
        const nameAttribute = Place2.getAttribute('name');

        Allplaces.css('fill','rgb(97, 176, 142)')
        Place.css('fill','#cc7722')


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

       
        console.log(nameAttribute);


    })


})



$(function(){
    
    $('*[class^="Place_"]').on('click',function(){
        

        let Place = $(this)
        var nameAttribute = $(this).attr('class');
        let Allplaces = $('*[class^="Place_"]')
        if(selectStatus == true){
            Allplaces.css('fill','rgb(97, 176, 142)')
        }

        
        nameAttribute = nameAttribute.replace('Place_','');

        
        Place.css('fill','#cc7722')


        if(cardStatus == true){
            // Brazil.css('fill','rgb(15, 72, 72)')
            hideCard();
        }
        else{
            //Brazil.css('fill','#cc7722')
            showCard();
            $('#placeName').text(nameAttribute);

        }

       
        console.log(nameAttribute);


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
            api_key: "7zVQLcz1imMRz6r982waYK7GCGn2lVwBQ2QQyZSK",
            model: "custom_prediction_regression_1649546173910",
            version: '1',
            features: [
                {"id":26123},
                {"id":49143}
            ],
          }),
          method: 'POST',
        },
      ).then(response=> response.json()).then(response=>{
          console.log(response);

          document.getElementById('pred').textContent = response[0].prediction;
        
        })


