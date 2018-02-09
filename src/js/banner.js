
document.addEventListener("DOMContentLoaded", function(){
    var banner = document.querySelector('#banner');
    var ul = banner.querySelector('ul');
    var items = banner.querySelector('li');
    var imgWidth = banner.clientWidth;
    var len = ul.children.length;
    var g_car = document.querySelector('.g_car');
    var buy_car = document.querySelector('.buy_car');
    var car_cont = document.querySelector('.car_cont');
    
    

    let index=0;
    ul.style.width=imgWidth*len+'px';
    let timer = setInterval(auto,3000);

    let page = document.createElement('div');
    page.classList.add('page');

    for(i=1;i<=len;i++){
        let span = document.createElement('span');
        span.innerText = i;
        if(i===index+1){
            span.classList.add('active')
        }
        page.appendChild(span);
    }

    banner.appendChild(page);
    banner.onmouseenter=()=>{
        clearInterval(timer);
    }
    banner.onmouseleave=()=>{
        timer = setInterval(auto, 3000);
    }

    banner.addEventListener('click',function(e){
        if(e.target.parentNode.classList.contains('page')){
            index = e.target.innerText-1;
            show()
        }
    })

    function auto(){
        index++;
        if(index>=len){
            // ul.style.left=0; 
            index=0;
        }
        let target = -imgWidth*index;
        animate(ul,{left:target});
        page.querySelector('.active').classList.remove('active');
        if(index<len){
            page.children[index].className='active';
        }else{
            page.children[0].className='active';
        }
    }

    function show(){
        if(index>=len){
            // ul.style.left=0;
            index=1;
        }
        let target = -imgWidth*index;
        animate(ul,{left:target});
        page.querySelector('.active').classList.remove('active');
        if(index<len){
            page.children[index].className='active';
        }else{
            page.children[0].className='active';
        }
    }

    g_car.onclick=function(e){
        if(buy_car.style.display == 'none'){
            buy_car.style.display = 'block';
        }else{
            buy_car.style.display = 'none';
        }
        
         e.preventDefault();   
    }





})    

  