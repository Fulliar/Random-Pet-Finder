const catBTN = document.getElementById('cat-btn');
const dogBTN = document.getElementById('dog-btn');
const dogImg = document.getElementById('dog-img');
const catImg = document.getElementById('cat-img');

dogBTN.addEventListener('click', getRandomDog);

function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data =>{
        if(data.url.includes('.mp4')) {
            getRandomDog();
        }
        else {
            dogImg.innerHTML = `<img src=${data.url} alt="dog" />`;
        }   
        
    }     
    ) 
};

catBTN.addEventListener('click', getRandomCat);

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data =>{
            catImg.innerHTML = `<img src=${data.file} alt="cat" />`; 
    }     
    )   
};


