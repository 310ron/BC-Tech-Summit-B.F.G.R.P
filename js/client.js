var codeFromServer = "1234";	// placeholder, replace with real code gotten from Server

var sessionalCode = "";

function checkCode() {
    var codeEntered = document.getElementById("roomCode").value;
    sessionalCode = codeEntered

    if (codeEntered == codeFromServer) {
        window.location.href = "PartSelection.html";
    } else {
    	console.log("Wrong code, please try again.");
    }
}

