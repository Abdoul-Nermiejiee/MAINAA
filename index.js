const username = document.getElementById("name").value.trim;
const password = document.getElementById("passkey").value.trim;
const newUser = document.getElementById("myUsername");
const newPassword = document.getElementById("newPasskey").value.trim;
const newEmail = document.getElementById("myEmail").value.trim;

function displayName() {
    
}

function newDisplayName() {
    newUser = newUser.value;
    console.log(newUser);
}
/*document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
    displayName();
    newDisplayName();
})
//newUser.textContent = "Kioi";*/