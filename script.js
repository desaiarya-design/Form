
function data() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const add = document.getElementById("address").value;

    if(fname == "" || lname == "" || add == ""){
        alert("All fields are mandatory");
        return false;
    }else if(fname && lname && address != String ){
        alert("Invalid information");
        return false;
    }
    alert("Response Recorded")
    return true;
}


fetch('http://localhost:3000/api/notes ')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
