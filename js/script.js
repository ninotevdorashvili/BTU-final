let nav=document.getElementById('head-navi');
let barmenu=document.getElementById('bar');
barmenu.addEventListener('click', function(){
    nav.classList.toggle('active');
});

// slider
$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1260,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 975,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

// users
let currentpage = 1
let totalpage

function users (page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(response){
        if (response.status !==200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(responseData){
        var fragment = document.createDocumentFragment();
        responseData.data.forEach(x => {
            let li=document.createElement('li');
            li.classList.add('list');
            let img=document.createElement('img');
            img.src=x.avatar;
            let span=document.createElement('span');
            span.textContent=x.first_name + ' ' + x.last_name;
            let p=document.createElement('p');
            p.classList.add('user-com');
            p.textContent='Lorem ipsum dolor sit amet, consetetur sadipscing.'
            li.appendChild(img);
            li.appendChild(span);
            li.appendChild(p);
            fragment.appendChild(li);
        });
        document.getElementById('users-ul').innerHTML=' ';
        document.getElementById('users-ul').appendChild(fragment);
        totalpage=responseData.total_pages;


    })
    .catch(function(error){
        if(error==404){
            let p=document.createElement('p');
            p.textContent='PAGE NOT FOUND';
            document.getElementById('coments').appendChild(p)
        } else {
            let p=document.createElement('p');
            p.textContent='SERVER ERROR';
            document.getElementById('coments').appendChild(p);
        }
    })
    
}
document.getElementById('back').addEventListener('click', function(){
    if(currentpage===1){
        return;
    }
    currentpage -=1;
    users(currentpage);
})
document.getElementById('next').addEventListener('click',function(){
    if(currentpage===totalpage){
        return;
    }
    currentpage +=1;
    users(currentpage);
})
users(currentpage);

// form
function validateForm(){
    let x = document.forms['myForm']['Fname'].value;
    if (x=='') {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms['myForm']['Lname'].value;
    if (y=='') {
        alert("Last Name must be filled out");
        return false;
    }
    let z = document.forms['myForm']['email'].value;
    if (z=='') {
        alert("E-mail must be filled out");
        return false;
    }
    let massage = document.forms['myForm']['message'].value;
    if (massage=='') {
        alert("Enter your message");
        return false;
    }

}
function myFunction() {
  document.getElementById("myForm").submit();
}




document.getElementById('submit').addEventListener('click', function(){
    alert('Submit');
})

// scrolleffect



const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((el) => {
    el.style.opacity = 0
  })
const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  } 
const displayScrollElement = (element) => {
  element.classList.add('scrolled');

}
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  })
};
window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })

// header
const header = document.querySelector('.header');

window.onscroll=function(){
    var top=window.scrollY;
    console.log(top);
    if(top >=100){
        header.classList.add('bg-active')
    }else {
        header.classList.remove('bg-active');
    }
}