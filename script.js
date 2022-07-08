let indexItem = 1;
showItem(indexItem);

const moveItem = (n) => {
    showItem(indexItem += n);
    return false;
}

const currentItem = (n) => {
    showItem(indexItem = n);
    return false;
}

function showItem(n){
    let slides = document.getElementsByClassName('slider_item');
    let dots = document.getElementsByClassName('dot');

    if( n > slides.length){
        indexItem = 1;
    }
    if( n < 1){
        indexItem = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active',' ')
    }

    dots[indexItem - 1].className += ' active';
    slides[indexItem - 1].style.display = 'block';

    return false;
}

// setInterval

setInterval(()=>{
    moveItem(1);
},5000)

// gallery----->
//gallery buttons
const btnAll = document.querySelector('.all_btn'),
      btnPhotography = document.querySelector('.photography_btn'),
      btnLogoDesign = document.querySelector('.logo_design_btn'),
      btnWebDesign = document.querySelector('.web_design_btn');
      allButtons = document.querySelectorAll('.switch_btn');
// array of photos
const galleryPhotos = document.querySelectorAll('.gallery_items');

const showAll =() =>{
    galleryPhotos.forEach((el) => { el.style.display ='block'; el.classList.add('showings')})
    cleanActiveButtons();
    btnAll.classList.add('active_switcher');
}

const showPhotography = ()=>{
    let photo = document.getElementsByClassName('photography')
    
    cleanAll();

    for(let i = 0; i < photo.length; i++){
        photo[i].classList.add('showings')
        photo[i].style.display = 'block';
    }

    cleanActiveButtons();

    btnPhotography.classList.add('active_switcher');


}

const showLogo = ()=>{
    let photo = document.getElementsByClassName('logo_design')
    
    cleanAll();

    for(let i = 0; i < photo.length; i++){
        photo[i].style.display = 'block';
        photo[i].classList.add('showings')
    }

    cleanActiveButtons();

    btnLogoDesign.classList.add('active_switcher');

}

const showWeb = ()=>{
    let photo = document.getElementsByClassName('web_design')
    
    cleanAll();

    for(let i = 0; i < photo.length; i++){
        photo[i].style.display = 'block';
        photo[i].classList.add('showings');
    }

    cleanActiveButtons();

    btnWebDesign.classList.add('active_switcher');

}

const cleanAll = ()=>{
    for(let i=0; i < galleryPhotos.length; i++){
        galleryPhotos[i].style.display = 'none';
    }
}

const cleanActiveButtons = ()=>{
    allButtons.forEach(el =>el.className = el.className.replace('active_switcher', ''));
}



btnAll.addEventListener('click',showAll)
btnPhotography.addEventListener('click',showPhotography)
btnLogoDesign.addEventListener('click',showLogo)
btnWebDesign.addEventListener('click',showWeb)



// gallery photos

// modalItems
const modalTimes = document.getElementById('times'),
      modalContainers = document.getElementById('modal_container'),
      modalImage = document.getElementById('modal_image'),
      modalRightRow = document.getElementById('right'),
      modalLeftRow = document.getElementById('left');

//galleyItems
const galleyItems = document.querySelector('.gallery_wrapper');
const galleryImage = document.querySelectorAll('.gallery_img');

//blcokScrollbar
const  body = document.getElementById('body');

let target;

// functions;

const showImage = (e) =>{
    target = e
    if(!target.src){
        return false
    }
    modalImage.src = target.src;
    modalContainers.style.display = 'block';
    body.style.overflow ="hidden"
}

const closeModalWindow = () => {
    modalContainers.style.display = 'none';
    body.style.overflow = null;
}

const nextImage = () =>{
    for(let i=0; i < galleryImage.length; i++){
        if(galleryImage[i] == target){
            if(i + 1 >= galleryImage.length){
                target = galleryImage[0];
                modalImage.src = target.src;     
            }else{
                i++
                target = galleryImage[i];
                modalImage.src = target.src; 
            }
        }
    }
}

const prevImage = () =>{
    for(let i=0; i < galleryImage.length; i++){
        if(galleryImage[i] == target){
            if( i - 1 >  0){
                i--
                target = galleryImage[i];
                modalImage.src = target.src;
            }else{
                target = galleryImage[galleryImage.length - 1];
                modalImage.src = target.src;
                return false; 
            }
        }
    }
}



//eventlistener

modalTimes.addEventListener('click', closeModalWindow);
modalImage.addEventListener('click', closeModalWindow);

//chooseImage
galleyItems.addEventListener('click', (e)=> showImage(e.target));

//gallaryRows 

modalRightRow.addEventListener('click',nextImage);
modalLeftRow.addEventListener('click',prevImage);


//burger

const burger = document.querySelector('#burger'),
      popupContainer = document.querySelector('#popup'),
      menuPopup = document.querySelector('#menu').cloneNode(1);

let popupLinks;


const showMenu =(e) =>{
    e.preventDefault();
    popupContainer.classList.toggle('open_popup');
    renderPopup();

    popupLinks = document.querySelector('.popup .menu');
    popupContainer.classList.replace('close_popup','open_popup');
    closePopup();

    burger.classList.toggle('toggle');
}

const renderPopup = () => {
    popupContainer.appendChild(menuPopup);
    
}

const closePopup = ()=>{
    popupLinks.addEventListener('click',() => popupContainer.classList.replace('open_popup','close_popup'));
}
burger.addEventListener('click',showMenu);
