// require(['config'],function(){
//     require(['ajax'],function(){


document.addEventListener("DOMContentLoaded",function(){
    let present = document.querySelector('.spresent');
    let family = document.querySelector('.sfamily');
    let fresh = document.querySelector('.sfresh');
    let kind = document.querySelector('.kind');
    let shop = document.querySelector('.shop');
    let shop_car = document.querySelector('.shop_car');
    let Aclose = document.querySelector('.Aclose');
    let carqty = document.querySelector('.carqty');
    let carpri = document.querySelector('.carpri');
    let acontinue = document.querySelector('.continue');
    let content = document.querySelector('#content');
    let buy_car = document.querySelector('.buy_car');
    let car_cont = document.querySelector('.car_cont');
    

let arr_status = [200,304];

var abc;
(function(){
    let Apage = document.querySelector('.Apage')
    let pageNo = 1;
    let qty = 5;
        //ajax请求
    ajax({
        url:'../api/present1.php',
        dataType:'json',
        data:{
            pageNo:pageNo,
            qty:qty
        },
        success:function(data){
            let res = data;
            // console.log(res)
            let ul=document.createElement('ul');
            ul.classList.add('clearfix');
            ul.style.width = 1290 + 'px';
            ul.innerHTML=res.data.map(item=>{
                return `<li data-id="${item.id}" class="lf">
                <div class="simg"><a href=""><img src="${item.imgs}" class="size aaa"></a></div>
                <p class="sp">${item.name}</p>
                <span class="price">￥${item.price}/${item.specification}</span>
                <div class="shop"></div>
                </li>`
            }).join('');

            present.appendChild(ul);
abc = ul;
            //分页
            let pageQty = Math.ceil(res.total/res.qty);
            console.log(pageQty)
            Apage.innerText = '';
            //循环显示多少
            for(let i=1;i<=pageQty;i++){
                let span = document.createElement('span');
                span.classList.add('hh')
                span.innerHTML = i;
                if(i===res.pageNo){
                    span.className='active';
                }
                Apage.appendChild(span);
            }
        }
    })

        Apage.onclick=function(e){
            if(e.target.tagName.toLowerCase()==='span'){
                pageNo = e.target.innerHTML*1;
                // e.target.className='active';
                // e.target.querySelector('.active').classList.remove('active');

                ajax({
                    url:'../api/present1.php',
                    dataType:'json',
                    data:{
                        pageNo:pageNo,
                        qty:qty
                    },
                    success:function(res){
            //         let ul=document.createElement('ul');
            //         ul.classList.add('clearfix');
            // ul.style.width = 1290 + 'px';
            abc.innerHTML=res.data.map(item=>{
                return `<li data-id="${item.id}" class="lf">
                <div class="simg"><a href=""><img src="${item.imgs}" class="size aaa"></a></div>
                <p class="sp">${item.name}</p>
                <span class="price">￥${item.price}/${item.specification}</span>
                <div class="shop"></div>
                </li>`
            }).join('');

                    }
                })
            }
        }
})();
// 数据生成列表
;(function(){
        ajax({
        url:'../api/family.php',
        dataType:'json',
        success:function(data){
            let res = data;
            
            let ul=document.createElement('ul');
            ul.classList.add('clearfix');
            ul.style.width = 1290 + 'px';
            ul.innerHTML=res.map(item=>{
                return `<li data-id="${item.id}" class="lf">
                <div class="simg"><a href=""><img src="${item.imgs}" class="size aaa"></a></div>
                <p class="sp">${item.name}</p>
                <span class="price">￥${item.price}/${item.specification}</span>
                <div class="shop"></div>
                </li>`
            }).join('');

            family.appendChild(ul);

        }
    })
})();
// 数据生成列表
;(function(){
        ajax({
        url:'../api/fresh.php',
        dataType:'json',
        success:function(data){
            let res = data;
            console.log(res)
            let ul=document.createElement('ul');
            ul.classList.add('clearfix');
            ul.style.width = 1290 + 'px';
            ul.innerHTML=res.map(item=>{
                return `<li data-id="${item.id}" class="lf">
                <div class="simg"><a href="" class="simg"><img src="${item.imgs}" class="size aaa"></a></div>
                <p class="sp">${item.name}</p>
                <span class="price">￥${item.price}/${item.specification}</span>
                <div class="shop"></div>
                </li>`
            }).join('');

            fresh.appendChild(ul);

        }
    })
})();
    
;(function(){
    present.onclick=function(e){
        if(e.target.className === 'size aaa'){
            let id = e.target.parentNode.parentNode.parentNode.dataset.id;
            console.log(id)
            e.target.parentNode.href='../html/Details.html?'+id;
        }else if(e.target.className === 'shop'){
            let id = e.target.parentNode.dataset.id;
            shop_car.style.display = 'block';
        jQuery(function($){
        $.ajax({
        url:'../api/Details1.php',
        dataType:'json',
        data:{id:id},
        success:function(res){  
            car_cont.innerHTML='';
        let ul = document.createElement('ul');
        ul.innerHTML=res.map(item=>{
            return `<li>
            <a href=""><img src="${item.imgs}">
            <div class="min"><h5>${item.name}</h5><h5>￥${item.price}/${item.specification}</h5></div>
            </a>
            <span class="rem">删除</span>
            </li>`
        }).join('');
            buy_car.appendChild(ul)

           

        }
    })
    });
            
        }
    }   
        buy_car.onclick=function(e){
            if(e.target.className==='rem'){
                e.target.parentNode.innerHTML='';
            }
        }
})();

;(function(){
    family.onclick=function(e){
        if(e.target.className === 'size aaa'){
            let id = e.target.parentNode.parentNode.parentNode.dataset.id;
            console.log(id)
            e.target.parentNode.href='../html/Details.html?'+id;
        }else if(e.target.className === 'shop'){
            let id = e.target.parentNode.dataset.id;
            shop_car.style.display = 'block';

            console.log(id)
        jQuery(function($){
        $.ajax({
        url:'../api/Details2.php',
        dataType:'json',
        data:{id:id},
        success:function(data){
            var res;
            data.forEach(function(item){
                carqty.append(item.qty);
                carpri.append(item.price);
                
            })
           

        }
    })
    });
        }
        
    }
})();


;(function(){
    fresh.onclick=function(e){
        if(e.target.className === 'size aaa'){
            let id = e.target.parentNode.parentNode.parentNode.dataset.id;
            console.log(id)
            e.target.parentNode.href='../html/Details.html?'+id;
        }else if(e.target.className === 'shop'){
            shop_car.style.display = 'block';


            // carqty carpri
            
        }
        
    }
})();


;(function(){
    content.onclick=function(e){
        if(e.target.className === 'pull'){
            let id = e.target.parentNode.parentNode.dataset.id;
            console.log(id)
            e.target.parentNode.href='../html/Details.html?'+id;
        }else if(e.target.className === 'shop'){
            let id = e.target.parentNode.dataset.id;
            shop_car.style.display = 'block';

            console.log(id)
        
        }
        
    }
})();

;(function(){
    Aclose.onclick=function(){
        shop_car.style.display = 'none';
    }
})();


;(function(){
    acontinue.onclick=function(e){
        shop_car.style.display = 'none';
        e.preventDefault();
    }
})();

// (function(){

// })();  



});

// });