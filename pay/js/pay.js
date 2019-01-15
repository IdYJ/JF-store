if($('.deta_money').text()=='￥ 0.00'||$('.deta_money').text()==''){
    $('.order_deta .order_money').css('display','none')
    $('.payment').css('display','none')
}
console.log($('.deta_money').text())
$('.payment').on('click','.p_pay',function(){
    $('.payment .img2').attr('src','../img/c_checkbox_off.png')
    $(this).find('.img2').attr('src','../img/c_checkbox_on.png')
})
$('#pay_footer').on('click',function(){
    if(0){
        window.location.href='success.html'
    }
    else{
        window.location.href='fail.html'
    }
})
//头部返回按钮
$('#header').on('click','.h_back',function(){
    $('#bk_confirm').animate({'top':'0'},300,'linear')
})
//弹出确定继续支付
$('#bk_confirm').on('click','.goo',function(){
    $('#bk_confirm').animate({'top':'100%'},300,'linear')
})