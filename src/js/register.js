document.addEventListener("DOMContentLoaded", function(){
    var accession = document.querySelector('.accession');
    var cipher = document.querySelector('.cipher');
    var reg_2 = document.querySelector('.reg_2');

    reg_2.onclick=function(e){
        let _accession = accession.value;
        let _cipher = cipher.value;
        console.log(_accession)
        console.log(_cipher)

        ajax({
            url:'../api/Register.php',
            data:{
                username:_accession,
                password:_cipher
            },
            success:function(data){
                console.log(data)
                if(data === 'success'){
                    alert('登录成功')
                    window.location.href = '../index.html';
                    
                }else if(data === 'fail'){
                    alert('登录失败')
                }
            }
        })
        e.preventDefault();
    }
})

