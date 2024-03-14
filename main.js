// /нав меню


document.querySelector('.burger').addEventListener("click", function(){
    document.querySelector('.burger span').classList.toggle('active')
})

document.querySelector('.burger').addEventListener("click", function(){
    document.querySelector('.burger-menu').classList.toggle('active')
})

// slider
function outputUpdate(vol){
    var output = document.querySelector('#volume')
    output.value = vol + "%";
    // output.style.left = vol - 20 + 'px'
}


document.querySelector('.dropdown__button').addEventListener("click", function(){
    document.querySelector(".dropdown__list").classList.toggle("dropdown__list--visible")
    document.querySelector('.dropdown__button').classList.toggle('dropdown__button--active')
})

document.querySelectorAll('.dropdown__list-item').forEach(function(listitem){
    listitem.addEventListener("click", function(){
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector(".dropdown__list").classList.remove("dropdown__list--visible")
        document.querySelector('.dropdown__button').classList.remove('dropdown__button--active')
    })
})


