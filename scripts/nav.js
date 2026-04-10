document.getElementById('navbar').innerHTML =`
    <div class="navigation-bar">
            <div class = "navigation-bar-title">
                Gavin Jacobs  |  ENC 2135
            </div>
            <div class = "dropdown">
                <button onclick = "showDropdown()" class = "dropdown-button">${getPageName()}<>  </button>
                <div id = "nav-dropdown" class = "dropdown-content">  
                    <a href="../index.html"> Home </a>
                    <a href="../subpages/reflection.html"> Reflection </a>
                    <a href="../subpages/revisions.html"> Revisons </a>
                    <a href="../subpages/artifacts.html"> Artifacts </a>
                </div>
            </div>
        </div>
`;
function getPageName(){
    return document.querySelector('meta[name="page-title"]').getAttribute('content')
}

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