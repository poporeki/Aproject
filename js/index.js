$(function () {
	var w_hidth = $(window).width(),//获取窗口宽度
		$control_menu = $(".control-menu"),/*菜单按钮 */
		$menu_sidebar = $(".menu-sidebar"),
		$body = $("body"),
		$sidebar_ul = $(".sidebar-ul"),
		$sidebar_mask = $("#sidebar-mask");
		$menu_sidebar_a = $("#menu_sidebar ul li a"),
		_sulRight=$sidebar_ul.css('right'),
		$lock_pos='';

	//菜单
	console.log($sidebar_ul.css('right'));
	$body.children().wrapAll('<div></div>');
	$control_menu.click(function () {//单击菜单按钮
		$('>div',$body).addClass('lock-position');
		$lock_pos=$('.lock-position');
		$('html').css({'overflow':'hidden'});
		$body.eq(0).css({"overflow": "hidden"});
		$menu_sidebar.fadeToggle();
		$sidebar_ul.css({ "right": '0' });

	});
	$sidebar_mask.click(hide_Sidebar);//单击菜单遮罩隐藏菜单
	$menu_sidebar_a.click(hide_Sidebar);//单击a标签隐藏菜单

	function hide_Sidebar() {//隐藏菜单
		$lock_pos.removeClass('lock-position');
		$('html').css({'overflow':'visible'});
		$body.eq(0).css({"overflow": "visible"});
		console.log($sidebar_ul.css('right'));
		$sidebar_ul.css({ "right": _sulRight });
		$menu_sidebar.fadeToggle();
		
	}
	//返回顶部
	var $backTopBtn = $("#back_to_top");
	console.log($backTopBtn);
	$backTopBtn.on('click', function () {//返回按钮单击事件
		console.log('clickback');
		$('html,body').animate({
			scrollTop: 0
		}, 600);
	});
	$(window).on('scroll', function () {//判断滚动隐藏按钮
		if ($(window).scrollTop() > 10) {
			$backTopBtn.fadeIn();
		} else {
			$backTopBtn.fadeOut();
		}

	});
	if ($("#main_item").offset().top - $(window).scrollTop() < 55) {
		$(".body-bg").addClass('add-body-bg');
	} else {
		$(".body-bg").removeClass('add-body-bg');
	}
	// //改变按钮宽度
	// var btnChangeWid = setInterval(change_BtnWid, 100);//创建定时器 btnChangeWid
	// var judgeNum = 0;
	// function change_BtnWid() {
	// 	$("#jumb_more_btn").width(Math.random() * $(".jumbotron-wrapper").width() - 10);
	// }
	// $("#jumb_more_btn").click(function () {//单击 停止变化
	// 	switch (judgeNum) {
	// 		case 0:
	// 			clearInterval(btnChangeWid);
	// 			judgeNum = 1;
	// 			break;
	// 		case 1:
	// 			btnChangeWid = setInterval(change_BtnWid, 100);
	// 			judgeNum = 0;
	// 			break;
	// 		default:
	// 			console.log('btn error!');
	// 			break;
	// 	}

	// }

	// );
});
$(function(){
	scrollS();
});
var scrollS=function(){
	var _wHei=$(window).height();
	var _dHei=$(document).height();
	var _h=0;
	var _maxH=_dHei-_wHei;
	var _pageNum=Math.ceil((_dHei-_wHei)/_wHei);
	var _pageNow=0;
	var _maxdisplay=(Math.floor((_dHei-_wHei)/_wHei)*_wHei)+(_dHei%_wHei);
	$(document).on("mousewheel DOMMouseScroll", function (e) {


    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    
	//当前位置
	var transLY=parseInt($('.main').css('transform').split(',')[5]);

    if (delta > 0) {
		if(_pageNow==0) return
		var num=transLY+_wHei;
		_pageNow--;
        // 向上滚
		// $('.main').css({'top':-_wHei});
		if(_pageNow==0){
			num=0;
		}
		$('.main').css({'transform':'translateY('+num+'px)'});
        console.log("wheelup");
    } else 
	if (delta < 0) {
		if(_pageNow==_pageNum) return
		var num=transLY-_wHei;
		_pageNow++;
		if(_pageNow==_pageNum){
			var _d=_maxdisplay-_wHei;
			if(_d<=0){
				num=_d;
			}
		}
        // 向下滚
		// $('.main').css({'top':_wHei});
		$('.main').css({'transform':'translateY('+num+'px)'});
		console.log("wheeldown");

		
    }
});
}