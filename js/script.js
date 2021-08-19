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
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
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
            p.textContent='Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod.'
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
        x.required=true;
        return false;
    }
}

// header
// document.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById('header').style.backgroundcolor = 'black';
//   } else {
//     document.getElementById('header').style.backgroundcolor = '';
//   }
// }

document.getElementById('submit').addEventListener('click', function(){
    alert('Submit');
})