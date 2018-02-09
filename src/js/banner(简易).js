document.addEventListener("DOMContentLoaded", function(){
    var banner = document.querySelector('#banner');
    var ul = banner.querySelector('ul');
    var items = banner.querySelector('li');
    var imgWidth = banner.clientWidth;
    var len = ul.children.length;

    let index =0 ;
    ul.style.width=imgWidth*len+'px';

    var timer = setInterval(()=>{
                index++;

                if(index>=len){
                    index = 0
                    
                }

                let target = -imgWidth*index;

                animate(ul,{left:target})
            },3000)

})    