;(function($){
    //安全使用jQuery
    $.fn.wgyCarousel = function(options){
        // 如何安全使用$：匿名函数传参
        // 如何获取.box：this=>jquery对象
        // 如果通过点语法，点前面的就是this
        
        //默认参数
        var defualts = {
            width:1264,
            height:400,
            index:0,
            //是否显示页码
            page:true,
            //轮播图自动
            autoPlay:true,

            //轮播间隔
            duration:3000,

            //轮播类型
            type:'vertical',
            
            //无缝滚动
            marquee:true
        }

        //this包含了2个ul，要单独的分离出来（遍历）
        //jq方法能链式调用就是因为里面return this，包括each里面也return this，相当于还是得到this
        return this.each(function(index, ele){
        //这里的this为节点
        //扩展，传进去是什么就把默认的属性覆盖（有就覆盖，没有就用默认）原生js写法
        // var opt = Object.assign({},defualts,options)
        //用jQuery方法
        //$.extend比assign还强大，能实现深复制
        var opt = $.extend({},defualts,options);

        //用变量接收this
        //这里的this就要转成jq对象
        var $this = $(this);
        //添加特定类
        //让写的东西添加类，使用者不写没关系，自己给它加
        $this.addClass('wgy-carousel');
        //设定样式
        $this.css({
            width:opt.width,
            height:opt.height
        });

        var $ul;
        //初始化
        //获取/生成节点
        //绑定事件
        //根据传进来的图片生成结构
        function init(){
            $ul = $('<ul/>')
            //写li，几个imgs就几个li
            var html=$.map(opt.imgs,function(item){
                //item就是传进来的图片对象
                return '<li><img src="'+item+'"/></li>'
            }).join('\n');
            $ul.html(html)

            $this.append($ul)
        }
        //执行函数
        init();

        var timer;
        //鼠标移入移出
        $this.on('mouseenter',function(){
            clearInterval(timer);
        }).on('mouseleave',function(){
            timer = setInterval(function(){
            opt.index++;
            show();
            },opt.duration);
        }).trigger('mouseleave');
        //绑定这2个事件后，只要主动执行这个事件，timer就会有东西，定时器就会启动（页面刷新的时候没有发生，那么就手动去执行）

        function show(){
            if(opt.index >= opt.imgs.length){
                opt.index = 0;
            }else if(opt.index<0){
                opt.index = opt.imgs.length-1
            }

            var target = -opt.index*opt.height;
            $ul.animate({top:target})
        }
    
        });
        //return this便于链式调用
        return this;
    }    
//js只要看到括号，就会认为是函数的执行，会忽略空格，所有前后一定要加分号
})(jQuery);