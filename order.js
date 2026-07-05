/*==============================
    ORDER FORM EMAILJS
==============================*/

const orderForm = document.getElementById("orderForm");
const orderBtn = document.getElementById("orderBtn");

orderForm.addEventListener("submit", function(e){

    e.preventDefault();

    orderBtn.disabled = true;
    orderBtn.innerHTML = "⏳ Sending Order...";

    emailjs.sendForm(

        "service_x8a2bc9",
        "template_5abugov",
        this

    )

    .then(function(){

        alert("🎉 Your Cake Order Has Been Sent Successfully!");

        orderForm.reset();

        orderBtn.innerHTML="🎂 Place Order";

        orderBtn.disabled=false;

    })

    .catch(function(error){

        console.log(error);

        alert("❌ Order Failed!\nPlease Try Again.");

        orderBtn.innerHTML="🎂 Place Order";

        orderBtn.disabled=false;

    });

});