//判断用户登录状态

var username
console.log(username)
if(username!=undefined){

    $('#me_content .login').css('display','none')
    $('#me_content .logout').css('display','block')
    console.log(1)
}
else{
    $('#me_content .login').css('display','block')
    $('#me_content .logout').css('display','none')
    
    console.log(0)
}
//角标显示隐藏
if(1){
    $('.tabbar i').css('display','block')
}
else{
    $('.tabbar i').css('display','none')
}
//点击积分跳转

//点击tabbar跳转

//点击

