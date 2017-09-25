$(function(){
	// 短信登录切换
	$('.login_method').toggle(function(){
		$("#loginForm").toggle();
		$("#loginForm2").toggle();
		$(this).addClass('on');
		$(this).html('账号密码登录');
	},function(){
		$(this).removeClass('on');
		$(this).html('手机动态码登录');
		$("#loginForm2").toggle();
		$("#loginForm").toggle();
	});

	// 默认发货地址
	$('.addfoot .default').click(function(){
		$('.addfoot .default').parent().parent().removeClass('on');
		$(this).parent().parent().addClass('on');
	});
	// 新增发货地址
	$('#addReceiver,.add_close').click(function(){
		$('.edit_main').stop().slideToggle();
	});
	$('.default2').click(function(){
		$(this).toggleClass('on');
	});

	// 支付方式
	$('.huodaofk').click(function(){
		$('#edit_huodaofk').show();
	});
	$('.zhifubao').click(function(){
		$('#edit_zhifubao').show();
	});
	$('.weixin').click(function(){
		$('#edit_weixin').show();
	});
	// 支付方式关闭按钮
	$('.pay_close').click(function(){
		$('.pay_type').hide();
	});
	// 物流管理
	$('.exp_main .add_ad').click(function(){
		$('#exp_main').show();
	});

})


// 广告管理
$(function () {
    //初始化
    tabAni(0);
    //点击，获取第几位
    $('.top_nav li').click(function () {
        var int = $(this).index();      //index()获取当前元素第几位，0开始
        tabAni(int);
    });
    //遍历第几位
    function tabAni(int) {
        $('.top_nav li').removeClass('on').eq(int).addClass('on');
        $('.ad_main').hide().eq(int).show();
    };
    
});



