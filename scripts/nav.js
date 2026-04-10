function showDropdown(){
    document.getElementById('nav-dropdown').classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropdown-button')){
        var dropDowns = document.getElementsByClassName('dropdown-content')
        for(var i = 0; i < dropDowns.length; i++)
            dropDowns[i].classList.remove("show");
    }
}