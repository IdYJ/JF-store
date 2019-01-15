$('#header').on('click','.h_back',function(){
    window.location.href='pay.html'
})
var num=$('.time_back span').text()
clearInterval(timer);
var timer=setInterval(function(){
    num--;
    $('.time_back span').text(num)
    if(num==0){
        clearInterval(timer)
        window.location.href='pay.html'
    }
},1000)
