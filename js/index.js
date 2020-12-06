

//* `resize`
//* `scroll`
//* `select`
//* `dblclick`
//* `drag / drop`

// 1: mouseover
let navLink = document.querySelector("nav a");
navLink.addEventListener('mouseover', (event) => {
    navLink.style.fontStyle = "italic"
});

// 2: mouseleave
navLink.addEventListener('mouseleave', (e) => {
    navLink.style.fontStyle = "normal"
});
///////////add for loop to select all of nav? or forEach?

// 3: click 
let signMeUp = document.querySelector('.btn');
signMeUp.addEventListener('click', (e) => {
    alert("Let's go on vacation!")
});

// 4: wheel 
document.addEventListener('wheel', (e) => {
      document.body.style.backgroundColor = "yellow"
});

// 5: keydown
document.addEventListener('keydown', (e) => {
    alert("You pressed a button on your keyboard!")
});

// 6: load
window.addEventListener('load', (e) => {
    alert("Your document is fully loaded")
});

// 7: resize
window.addEventListener('resize', (e) => {
    alert("You resized the browser");
})

// 8: 

// 9: 

// 10. dblclick
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('dblclick', (e) => {
    alert("No vacation for you")
});





