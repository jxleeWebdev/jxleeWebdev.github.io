let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userPackage = document.getElementById("userPackage")
    let userPackageVal = userPackage.value

    let userPrefer = document.getElementById("userPrefer")
    let userPreferVal = userPrefer.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

     BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
})

function BookNow(userName, userEmail, userPax, userPackage, userPrefer, userRemarks) {
    //let url = 'https://api.sheety.co/95ac9b79432531ba44206a774f4126d9/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            Package: userPackage,
            Prefer: userPrefer,
            remarks: userRemarks
       }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + "added in the list!")
        }); 

}