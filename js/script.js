// backToTop button //

let body = document.querySelector('body');
let backToTop = document.querySelector('.backToTop');
const scrollProgress = (event) => {

    let bodyHeight = body.clientHeight - window.innerHeight;
    let scrollTop = Math.round(window.scrollY);
    let percentage = Math.round((100 / bodyHeight) * scrollTop);

    backToTop.style.backgroundImage = `conic-gradient(#6D2932 0% ${percentage}%,white 0% ${percentage}%)`;
    
}

window.addEventListener('scroll', scrollProgress);


backToTop.addEventListener('click', () => {
    scroll({
            top: 0,
            behavior: 'smooth'
        })

});




// setInterval loop //......

// let count = 0;

// let testing = setInterval(()=>{
//     count++;
//     console.log(count);

//     if(count >=20){
//         clearInterval(testing);
//     }
    
// }, 1000);


// forEach loop //......

// let fruits = [
//     'apple',
//     'orange',
//     'mango',
//     'jackfruit',
//     'apple',
//     'orange'
    
// ]


// fruits.forEach(fruit => {
//     console.log(`I like ${fruit} `);

// })


// counter //

let counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
let ending = counter.dataset.ending;
let count = 0;
let duration= 1000 / ending;


let counting = setInterval(() => {
    count++;
    counter.innerHTML = count
    if(count >= ending){
        clearInterval(counting)

    }

}, duration)


})