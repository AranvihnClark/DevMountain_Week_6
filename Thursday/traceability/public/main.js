const imagesBtn = document.querySelector('#images-button');
const homeBtn = document.querySelector(`#home-button`);
const buyBtn = document.querySelector(`#buy-button`);
const aboutBtn = document.querySelector(`#about-button`);
const aboutVisibility = document.querySelector(`about-section`);
const aboutElement = document.getElementById(`about-section`);
const closeBtn = document.querySelector(`#close-about`);
const closeElement = document.getElementById(`close-about`);

const baseUrl = `http://localhost:5050`;

pictures = [{
    src: `https://images.unsplash.com/photo-1575252663512-b25714ec27f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80`,
    alt: `balloon-1`
}];

const getImages = () => {
    axios.get(`${baseUrl}/pictures`)
    .then(res => {console.log('Yay')})
    .catch(err => {
        console.log(err)
    });
}

const getHome = () => {
    axios.get(`${baseUrl}/home`)
    .then(res => {
        console.log(`Going home`)
    })
    .catch(err => {
        console.log(err);
    });
}

const getAbout = () => {
    axios.get(`${baseUrl}/about`)
    .then(res => {
        aboutElement.classList.remove(`hidden`);
        closeElement.classList.remove(`hidden`);
    })
    .catch(err => {
        console.log(err);
        aboutElement.classList.remove(`hidden`);
        closeElement.classList.remove(`hidden`);
    })
}

const getCloseAbout = () => {
    axios.get(`${baseUrl}/close`)
    .then(res => {
        aboutElement.classList.add(`hidden`);
        closeElement.classList.add(`hidden`);
    })
    .catch(err => {
        console.log(err);
    })
}

imagesBtn.addEventListener('click', getImages);
homeBtn.addEventListener('click', getHome);
aboutBtn.addEventListener('click', getAbout);
closeBtn.addEventListener('click', getCloseAbout);