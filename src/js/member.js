document.addEventListener("DOMContentLoaded", function(){
    var pass1 = document.querySelector('.pass1');
    var pass2 = document.querySelector('.pass2');
    var tf1 = document.querySelector('.tf1');
    var tf2 = document.querySelector('.tf2');
    var tf3 = document.querySelector('.tf3');
    var tf4 = document.querySelector('.tf4');
    var tf5 = document.querySelector('.tf5');
    var ft1 = document.querySelector('.ft1');
    var ft2 = document.querySelector('.ft2');
    var use = document.querySelector('.use');
    var log_1 = document.querySelector('.log_1')
    var all_code = document.querySelector('.all_code')
    var code = document.querySelector('.code');
    var cell_code = document.querySelector('.cell_code')
    var phone_code = document.querySelector('.phone_code')
    var refresh = document.querySelector('.refresh')
    var Code = vCode();
    code.innerHTML = Code;
    var popover = document.querySelector('#popover')
    var close = popover.querySelector('.close')
    var mask = document.querySelector('.mask')
    var reminder = popover.querySelector('.reminder')
    



            // 窗口大小改变时自适应
            window.onresize = autoPosition;
autoPosition()
            
                // 居中定位
                function autoPosition(){
                var left = (window.innerWidth-popover.offsetWidth)/2;
                var top = (window.innerHeight-popover.offsetHeight)/2;
                popover.style.left = left + 'px';
                popover.style.top = top + 'px';
            }

    close.onclick=function(){
        popover.style.display = 'none';
        mask.style.display = 'none';
    }


// 确认密码是否相同
    // pass2.onchange = checkpass;
    function checkpass(){
        var _pass1 = pass1.value;
        var _pass2 = pass2.value;
        var check = false;
        if(_pass1!=_pass2){
            tf2.style.display = 'block';
            tf3.style.display = 'block';
            tf2.style.background = "url('../img/false.png')"
            tf3.style.background = "url('../img/false.png')"
            var check = false;
        }else if(_pass1=_pass2){
            tf2.style.display = 'block';
            tf3.style.display = 'block';
            tf2.style.background = "url('../img/true.png')"
            tf3.style.background = "url('../img/true.png')"
            var check = true;
        }
        return check;
    }

//手机号为空
use.onchange = isnull;
function isnull(){
    var check = false;
    if(use.value!==''){
        check = true;
    }else if(use.value==''){
        tf1.style.display = 'block';
        tf1.style.background = "url('../img/false.png')"
        check = false;
    }
    return check;
}

// 判断手机号
function phonelen(){
    var check = false;
    var _use = use.value;
    if(!/^1[3578]\d{9}$/.test(_use)){
        tf1.style.display = 'block';
        tf1.style.background = "url('../img/false.png')"
        check = false;
    }else if(/^1[3578]\d{9}$/.test(_use)){
        tf1.style.display = 'block';
        tf1.style.background = "url('../img/true.png')"
        check = true;
    }
    return check;
}

//密码长度
// pass2.onchange = passlen;
function passlen(){
    var check = false;
    if(pass1.value.length>=6 && pass2.value.length<20){
        tf2.style.display = 'block';
        tf2.style.background = "url('../img/true.png')"
        check = true;
    }else{
        tf2.style.display = 'block';
        tf2.style.background = "url('../img/false.png')"
        check = false;
    }
    return check;
}

//密码为空
// log_1.onclick = ispass;
function ispass(){
    var check = false;
    if(pass1.value!=='' || pass2.value!==''){
        tf2.style.display = 'block';
        tf3.style.display = 'block';
        tf2.style.background = "url('../img/true.png')"
        tf3.style.background = "url('../img/true.png')"
        check = true;
    }else{
        tf2.style.display = 'block';
        tf3.style.display = 'block';
        tf2.style.background = "url('../img/false.png')"
        tf3.style.background = "url('../img/false.png')"
        check = false;
    }
    return check;
}

//判断验证码
// all_code.onchange = checkcode;
function checkcode(){
    var check = false;
    if(all_code.value == Code){
        tf4.style.display = 'block';
        tf4.style.background = "url('../img/true.png')"
        check = true;
    }else{
        tf4.style.display = 'block';
        tf4.style.background = "url('../img/false.png')"
        check = false;
    }
      return check;  
}
phone_code.onclick = checkphone;
function checkphone(){
    var check = false;
    if(checkpass()==true && checkcode()==true && ispass()==true && isnull()==true && passlen() && phonelen()==true){
        cell_code.disabled = false; 
        check = true;
    }
    return check;
}

log_1.onclick=function(e){
    if(checkphone()==true){
        
        let _use = use.value;
        let _pass = pass2.value;
    
        ajax({
            url:'../api/Login.php',
            data:{
                username:_use,
                password:_pass
            },
            success:function(data){
                if(data === 'success'){
                popover.style.display = 'block';
                mask.style.display = 'block';
                reminder.innerHTML = '注册成功';
                autoPosition();
                }else{
                popover.style.display = 'block';
                mask.style.display = 'block';
                reminder.innerHTML = '该手机号被注册过，请换一个吧';
                autoPosition();
                    tf1.style.display = 'block';
                    tf1.style.background = "url('../img/false.png')"
                }
            }

        })
        
    }else if(ispass()==false && isnull()==false){
        
        popover.style.display = 'block';
        mask.style.display = 'block';
        reminder.innerHTML = '请完善信息';
        autoPosition();
    }else{
        
        popover.style.display = 'block';
        mask.style.display = 'block';
        reminder.innerHTML = '注册不成功';
        autoPosition();
    }
    e.preventDefault();
}


//刷新验证码
// code.onclick=function(){
// }

    




})