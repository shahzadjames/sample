{/* <script>
                function toggleMenu(){    
                    var mainMenu = document.getElementsByClassName("main-menu")[0];
                    var icon = document.getElementById("menu-icon");
                    if (mainMenu.style.display === "block"){
                        mainMenu.style.display = "none";
                        icon.className = 'fa fa-bars';
                    } 
                    else {
                        mainMenu.style.display = "block";
                        icon.className = 'fa fa-close';
                    }
                }
            </script> */}
function toggleMenu(){    
    var mainMenu = document.getElementsByClassName("main-menu")[0];
    var icon = document.getElementById("menu-icon");
    if (mainMenu.style.display === "block"){
        mainMenu.style.display = "none";
        icon.className = 'fa fa-bars';
    } 
    else {
        mainMenu.style.display = "block";
        icon.className = 'fa fa-close';
    }
}
