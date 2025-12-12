let card = document.getElementById('card')
let messagePopUp = document.getElementById("message")


card.addEventListener('click', function copyEmail() {
    var textToCopy = document.getElementById("email").textContent;

    navigator.clipboard.writeText(textToCopy).then(function () {
        console.log('Email copied successfully');
        
        messagePopUp.style.opacity = 1
        messagePopUp.style.transition = '0.5s ease-out'
        messagePopUp.style.marginTop = '-350px'

        setTimeout(function(){
            messagePopUp.style.transition = '0.2s ease-in'
            messagePopUp.style.marginTop = '-320px'
            messagePopUp.style.opacity = 0
        }, 1000)

    }, 
    function (err) {
        console.error('Could not copy text: ', err);
    });
})

