


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


let card = document.querySelector(".card");
card.style.display = "none";
let cardStatus = false;

$(function(){
    $('[id=BR]').on('click',function(){
        
        let Brazil = $(this)
        let BR = $(this)["0"].id
        let AllCountries = $('[id=BR')

        console.log($((BR)))

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

