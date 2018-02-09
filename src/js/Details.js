// require(['config'],function(){
//     require(['jquery','zoom'],function(){
    document.addEventListener("DOMContentLoaded",function(){
    let searchURL = window.location.search;
    searchURL = searchURL.substring(1);
    let focus = document.querySelector('.focus');
    let focusItem = focus.children[0].children;
    let focusCon = focus.children[1].children;
    let small = document.querySelector('.small');
    let big = document.querySelector('.big');
    let kind = document.querySelector('.kind');
    let a_name = document.querySelector('.a_name');
    let bname = document.querySelector('.bname');
    let bmoney = document.querySelector('.bmoney');
    let bguige = document.querySelector('.bguige');
    let sad = document.querySelector('.sad');
    let account = document.querySelector('.account');

    ;(function(){
    for(var i=0;i<focusItem.length;i++){
        if(i!==0){
            focusCon[i].style.display='none';
        }
        focusItem[i].onclick=function(e){
            for(var j=0;j<focusItem.length;j++){
            if(focusItem[j]===this){
                focusCon[j].style.display='block';
            }else{
                focusCon[j].style.display='none';
            }
        }
            e.preventDefault();
        }
        
    }

})();

    jQuery(function($){
        $.ajax({
        url:'../api/Details1.php',
        dataType:'json',
        data:{id:searchURL},
        success:function(data){
            // data = $.parseJSON(data);
            var res;
            data.forEach(function(item){console.log(item.name)
                res = item;
                small.src = item.imgs;
                small.dataset.big = item.imgs;
                big.src = item.imgs;
                big.dataset.big = item.imgs;
                kind.text = item.category+'>';
                a_name.append(item.name);
                bname.append(item.name);
                bmoney.append('$'+item.price);
                bguige.append(item.specification);
                sad.value = item.qty;
            })
           

        }
    })
    });

    jQuery(function($){
        $.ajax({
        url:'../api/Details2.php',
        dataType:'json',
        data:{id:searchURL},
        success:function(data){
            // data = $.parseJSON(data);
            var res;
            data.forEach(function(item){console.log(item.name)
                res = item;
                small.src = item.imgs;
                small.dataset.big = item.imgs;
                big.src = item.imgs;
                big.dataset.big = item.imgs;
                kind.text = item.category+'>';
                a_name.append(item.name);
                bname.append(item.name);
                bmoney.append('$'+item.price);
                bguige.append(item.specification);
                sad.value = item.qty;
            })
           

        }
    })
    });

    jQuery(function($){
        $.ajax({
        url:'../api/Details3.php',
        dataType:'json',
        data:{id:searchURL},
        success:function(data){
            // data = $.parseJSON(data);
            var res;
            data.forEach(function(item){console.log(item.name)
                res = item;
                small.src = item.imgs;
                small.dataset.big = item.imgs;
                big.src = item.imgs;
                big.dataset.big = item.imgs;
                kind.text = item.category+'>';
                a_name.append(item.name);
                bname.append(item.name);
                bmoney.append('$'+item.price);
                bguige.append(item.specification);
                sad.value = item.qty;
            })
           

        }
    })
    });
})
//     })
// })

