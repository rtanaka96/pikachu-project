//for validating code and preventing es6 errors
/*jshint esversion: 6 */

window.onload = function () {
    "use strict";
    //generate random sprite image
    const ext = `.webp`;
    const path = `img/sprites/0`;
    let img = Math.floor(Math.random() * 3) + 1;
    let imgpath = path + img + ext;

    let sprite = document.getElementById('mainsprite');
    sprite.src = imgpath;

    //hamburger menu
    const hamburg = document.getElementById('hamburger');
    hamburg.addEventListener("click", menuToggle);

    function menuToggle() {
        let links = document.getElementById('links');

        if (links.style.visibility == "visible") {
            links.style.visibility = "hidden";
            links.style.opacity = "0";
        }
        else {
            links.style.visibility = "visible";
            links.style.opacity = "1";
        }
    }

    //tab menu
    const about = document.getElementById('about');
    const ability = document.getElementById('ability');
    const variant = document.getElementById('variant');

    document.getElementById('tabs').onclick = function (e) {
        var i;
        const tabs = document.querySelectorAll('.tablink');
        const tabcontent = document.querySelectorAll('.tabcontent');

        //remove active class for all tabs and hide all tabs
        for (i = 0; i < tabs.length; i++) {
            tabs[i].className = tabs[i].className.replace('active', ' ');
            tabcontent[i].style.display = 'none';
        }

        //set clicked tab to active class
        e.target.className += ' active';

        //get id for relevant tab content from clicked tab and show it
        let rawTab = e.target.id;
        let editedTab = rawTab.slice(0, -3);
        document.getElementById(editedTab).style.display = 'block';

        //scroll to displayed content
        document.getElementById(editedTab).scrollIntoView({ block: 'center', behavior: 'smooth' });
    };

    //form
    const form = document.getElementById('subscribeForm');
    form.addEventListener("submit", function (event) {
        //prevent form from doing anything or refreshing page
        event.preventDefault();
        //return data to user

        //first name
        let firstName = this.elements[0].value;
        //last name
        let lastName = this.elements[1].value;
        //alert msg
        const thankYou = `Thank you ` + firstName + ` ` + lastName + ` for subscribing to Pikachu's fanpage!`;
        alert(thankYou);
    });

    //when window resizes or loads, move stuff around depending on screen size :D
    moveElements();
    window.addEventListener('resize', moveElements);

    function moveElements() {
        const titleElement = document.getElementById('title');
        const aboutElement = document.getElementById('about');
        const formElement = document.getElementById('subscribe');
        if (window.innerWidth >= 1440) {
            titleElement.appendChild(aboutElement);
            titleElement.appendChild(formElement);
        }
        else {
            document.getElementById('infos').prepend(aboutElement);
            document.getElementById('content').appendChild(formElement);
        }
    }

};