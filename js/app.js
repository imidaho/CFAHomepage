// Opens form when clicking "Whats your farm issue?"
function openForm() {
    var form = document.getElementById("myForm");
    if (form.style.display ==="none") {
        form.style.display ="block";
    } else { 
        form.style.display ="none";
    }
  }

//   Closes form
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  };


