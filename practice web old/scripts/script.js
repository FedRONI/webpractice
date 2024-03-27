document.addEventListener("DOMContentLoaded", function() {
    const listButton = document.querySelector('.list-m');
    const mobileMenu = document.querySelector('.mobile-menu');

    listButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        listButton.classList.toggle('active'); 
        
        if (listButton.src.includes("List.svg")) {
            listButton.src = "../details/krest.svg";
        } else {
            listButton.src = "../details/List.svg";
        }

        if (mobileMenu.classList.contains('active')) {
            window.requestAnimationFrame(function() {
                mobileMenu.classList.add('fade-in');
            });
        } else {
            mobileMenu.classList.remove('fade-in');
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search");
    const searchContainer = document.getElementById("search-container");
    const escapeButton = document.getElementById("escape");
    const searchInput = document.getElementById("search-input");
    const searchIconM = document.getElementById("search-m");
    const searchContainerM = document.getElementById("search-container-m");
    const escapeButtonM = document.getElementById("escape-m");
    const searchInputM = document.getElementById("search-input-m");

    searchIcon.addEventListener("click", function () {
        if (searchContainer.classList.contains("show")) {
            searchInput.value = "";
        } else {
            searchContainer.classList.add("show");
        }
    });

    escapeButton.addEventListener("click", function () {
        searchContainer.classList.remove("show");
    });

    searchIconM.addEventListener("click", function () {
        if (searchContainerM.classList.contains("show")) {
            searchInputM.value = "";
        } else {
            searchContainerM.classList.add("show");
        }
    });

    escapeButtonM.addEventListener("click", function () {
        searchContainerM.classList.remove("show");
    });

});
