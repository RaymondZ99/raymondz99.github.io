!function(t,e,s,i,a){var o=t("<div>")[0],n=/url\(["']?(.*?)["']?\)/,r=[],h={top:0,left:0,bottom:1,right:1,center:.5};if(!("backgroundSize"in o.style)||t.debugBGS){t.cssHooks.backgroundSize={set:function(e,s){var i,a,o,n=!t.data(e,"bgsImg");t.data(e,"bgsValue",s),n?(r.push(e),t.refreshBackgroundDimensions(e,!0),a=t("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"}),o=t("<img>").css({position:"absolute"}).appendTo(a),a.prependTo(e),t.data(e,"bgsImg",o[0]),i=(t.css(e,"backgroundPosition")||t.css(e,"backgroundPositionX")+" "+t.css(e,"backgroundPositionY")).split(" "),t.data(e,"bgsPos",[h[i[0]]||parseFloat(i[0])/100,h[i[1]]||parseFloat(i[1])/100]),"auto"==t.css(e,"zIndex")&&(e.style.zIndex=0),"static"==t.css(e,"position")&&(e.style.position="relative"),t.refreshBackgroundImage(e)):t.refreshBackground(e)},get:function(e){return t.data(e,"bgsValue")||""}},t.cssHooks.backgroundImage={set:function(e,s){return t.data(e,"bgsImg")?t.refreshBackgroundImage(e,s):s}},t.refreshBackgroundDimensions=function(e,s){var i=t(e),a={width:i.innerWidth(),height:i.innerHeight()},o=t.data(e,"bgsDim"),n=!o||a.width!=o.width||a.height!=o.height;t.data(e,"bgsDim",a),n&&!s&&t.refreshBackground(e)},t.refreshBackgroundImage=function(e,s){var i=t.data(e,"bgsImg"),a=(n.exec(s||t.css(e,"backgroundImage"))||[])[1],o=i&&i.src,r=a!=o;r&&(i.style.height=i.style.width="auto",i.onload=function(){var s={width:i.width,height:i.height};(1!=s.width||1!=s.height)&&(t.data(e,"bgsImgDim",s),t.data(e,"bgsConstrain",!1),t.refreshBackground(e),i.style.visibility="visible",i.onload=null)},i.style.visibility="hidden",i.src=a,(i.readyState||i.complete)&&(i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i.src=a),e.style.backgroundImage="none")},t.refreshBackground=function(e){var s,a,o=t.data(e,"bgsValue"),n=t.data(e,"bgsDim"),r=t.data(e,"bgsImgDim"),h=t(t.data(e,"bgsImg")),d=t.data(e,"bgsPos"),g=t.data(e,"bgsConstrain"),c=n.width/n.height,u=r.width/r.height;"contain"==o?u>c?(t.data(e,"bgsConstrain",s="width"),a=i.floor((n.height-n.width/u)*d[1]),h.css({top:a}),s!=g&&h.css({width:"100%",height:"auto",left:0})):(t.data(e,"bgsConstrain",s="height"),a=i.floor((n.width-n.height*u)*d[0]),h.css({left:a}),s!=g&&h.css({height:"100%",width:"auto",top:0})):"cover"==o&&(u>c?(t.data(e,"bgsConstrain",s="height"),a=i.floor((n.height*u-n.width)*d[0]),h.css({left:-a}),s!=g&&h.css({height:"100%",width:"auto",top:0})):(t.data(e,"bgsConstrain",s="width"),a=i.floor((n.width/u-n.height)*d[1]),h.css({top:-a}),s!=g&&h.css({width:"100%",height:"auto",left:0})))};var d,g,c,u=t.event,l={_:0},f=0;d=u.special.throttledresize={setup:function(){t(this).on("resize",d.handler)},teardown:function(){t(this).off("resize",d.handler)},handler:function(e,s){var i=this,a=arguments;g=!0,c||(t(l).animate(l,{duration:1/0,step:function(){f++,(f>d.threshold&&g||s)&&(e.type="throttledresize",u.dispatch.apply(i,a),g=!1,f=0),f>9&&(t(l).stop(),c=!1,f=0)}}),c=!0)},threshold:1},t(e).on("throttledresize",function(){t(r).each(function(){t.refreshBackgroundDimensions(this)})})}}(jQuery,window,document,Math);

jQuery(document).ready(function($) {
    //菜单
    $(".MENUS li").hover(function(){
        $(this).addClass("ok").find("dl").stop(true,true).slideUp(0).slideDown(300);
    },function(){
    $(".ok").find("dl").stop(true,true).slideUp(200);
        $(this).removeClass("ok");
    });


    //选项卡切换
    $(".TAB li").mousemove(function(){
        var tab=$(this).parent(".TAB");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });


    //选项卡点击切换
    $(".TAB_CLICK li").click(function(){
        var tab=$(this).parent(".TAB_CLICK");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
        $(con).eq(on).show().siblings(con).hide();
    });

});


jQuery(document).ready(function($) {
    var isMobile = false;

    $(window).resize(function(event) {
        isMobile = $('.m-hd').is(':visible');
        return isMobile;
    }).resize();

    jQuery(document).ready(function($) {
        MobileMenu.init();
    });
    var MobileMenu = {
        init: function(){
            this.showNav();
            this.showSub();
            this.hideNav();
            this.hassub();
        },
        showNav: function(){
            $('.m-trigger').click(function(e){
                var m_nav = $('.m-nav');
                if(m_nav.is(':visible')){
                    $('.m-nav').hide();
                }else{
                    $('.m-nav').show();
                }
                e.stopPropagation();
            });
        },
        hassub: function(){
            $('.m-nav li').each(function() {
                if( $(this).find('.m-sub a').length > 0 ){
                    $(this).addClass('has-sub');
                }
            });
        },
        showSub: function(){
            $('.m-nav li > a').click(function(){
                var sub = $(this).next('.m-sub');
                if( !sub.length > 0){
                    return true;
                }
                if(sub.is(':visible')){
                    sub.hide();
                    $(this).removeClass('on');
                }else{
                    $('.m-sub').hide();
                    $('.m-nav li .on').removeClass('on');
                    $(this).addClass('on');
                    sub.show();
                }
                return false;
            })
        },
        hideNav:function(){
            $('body').click(function(){
                $('.m-nav').hide();
            })
        }
    }
});



$(document).ready(function(){

    $(".side ul li").hover(function(){
        $(this).find(".sidebox").stop().animate({"width":"292px"},200).css({"background":"#e6ebef",'color':'#6c7986'})
    },function(){
        $(this).find(".sidebox").stop().animate({"width":"92px"},200).css({"background":"#329bdd"})
    });

    // 箭头
    $('#nav .MENUS li:last').addClass('last');
    $('#nav .MENUS li').each(function(index, el) {
        var v1 = $(this).children('a');
            if(v1.next('dl').length>0){
                v1.after('<em></em>')
            }
    });

    // 回到顶部
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });

    $('#backtop').click(function (event) {
        $('html, body').stop().animate({ scrollTop: 0 });
    });


    if( $('html').hasClass('ie8') ){
        if( $('.consultant-list .img').length > 0 ){
            $('.consultant-list .img').css({backgroundSize: "cover"});
        }

        if( $('.ul-employee .pic').length > 0 ){
            $('.ul-employee .pic').css({backgroundSize: "cover"});
        }
    }


    if( $('.comment-list').length > 0 ){
        $('.comment-list li:even').addClass('odd');
        $('.comment-list li:odd').addClass('even');
    }

    // 灰色


    if( $('.comment-list').length > 0  || $('.activity-list').length > 0  || $('.ul-type-jishu').length > 0){
        $('body').addClass('gray-bg');
    }

    //窗口变化加载不同尺寸图片
    function change() {
        var w_width = $(window).width();
        $('.n_baner').width(w_width);
        $('.n_baner').find('li').width(w_width);
        $('img').each(function () {
            if (w_width > 999) {
                $(this).attr('src', $(this).attr('data-1920'));
                $('.n_baner').width(1920);
                $('.n_baner').find('li').width(1920);
            } else if (w_width <= 999 && w_width > 640) {
                $(this).attr('src', $(this).attr('data-990'));
            } else if (w_width <= 640) {
                $(this).attr('src', $(this).attr('data-640'));
            }
        });
        /*$('.fourlist').outerWidth(true),
        $('.fourlist li').length;*/
        $('.fourlist').each(function () {
            if (w_width > 999) {
                $('.fourlist li:nth-child(4n)').addClass('mn');
            } else if (w_width <= 999 && w_width > 780) {
                $('.fourlist li:nth-child(4n)').addClass('mn');
            } else if (w_width <= 780) {
                $('.fourlist li:nth-child(3n)').addClass('mn');
            }
        });
    }
    change();

    $(window).load(function () {
        change();
    });

    // work
    $(".work_list .view").click(function () {
        $(this).parent("h6").addClass("add").siblings().removeClass("add");
        $(this).parent().next(".work_list_cont").slideToggle();
        $(this).parents().siblings().find('.work_list_cont').slideUp();

        $(this).find(".view_bf").hide();
        $(this).parents().siblings().find('.view_bf').show();
        $(this).find(".view_af").show();
        $(this).parents().siblings().find('.view_af').hide();
    });

    // tab
    $('.tabname li').on('click', function () {
        var obj = $(this),
            paren = obj.parents('.tab');
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        paren.find('.list').hide();
        paren.find('.list').eq(index).show();
    });
});
