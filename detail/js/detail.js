//滚动条高度改变更改标头样式
$('#box').scroll(function(){
    //console.log($(this).scrollTop())
    var top=$(this).scrollTop();
    var he=$('#detail_swiper').height();
    //console.log(he)
    if(top<he){
        ahp=top/he
    }else{
        ahp=1
    }
    if(top==0){
        $('#fade_header').css('display','none')
    }else{
        $('#fade_header').css('display','block')
    }
    $('#fade_header').css('background','rgba(255,255,255,'+ahp+')')
    $('#fade_header').css('color','rgba(153, 153, 153, '+ahp+')')
    if(top<620){
        $('.goods').css('color','rgba(253, 112, 98, '+ahp+')')
        $('.goods').css('border-bottom','2px solid rgba(253, 112, 98, '+ahp+')')
        $('.content').css('color','rgba(153, 153, 153, '+ahp+')')
        $('.content').css('border-bottom','none')
    }else{
        $('.content').css('color','rgba(253, 112, 98, '+ahp+')')
        $('.content').css('border-bottom','2px solid rgba(253, 112, 98, '+ahp+')')
        $('.goods').css('color','rgba(153, 153, 153, 1)')
        $('.goods').css('border-bottom','none')
    }
})
//点击标头更改滚动条高度
$('.goods').on('click',function(){
    var he=$('#detail_swiper').height();
    var he2=$('#fade_header').height();
    $('#box').scrollTop(he-he2)
    $('.goods').css('color','rgba(253, 112, 98, 1)')
    $('.goods').css('border-bottom','2px solid rgba(253, 112, 98, 1)')
    $('.content').css('color','rgba(153, 153, 153, 1)')
    $('.content').css('border-bottom','none')
})
$('.content').on('click',function(){
    var he=$('#detail_swiper').height();
    var h1=$('#detail_price').height();
    var h3=$('#roader').height();
    var he2=$('#fade_header').height();
    $('#box').scrollTop(he+h1+h3)
    $('.content').css('color','rgba(253, 112, 98, 1)')
    $('.content').css('border-bottom','2px solid rgba(253, 112, 98, 1)')
    $('.goods').css('color','rgba(153, 153, 153, 1)')
    $('.goods').css('border-bottom','none')
})
//分享开关
$('.icon_share').on('click',function(){
    $('#share').css('display','block')
})
$('.close_button').on('click',function(){
    $('#share').css('display','none')
})
//规格开关
$('.rod_second').on('click',function(){
    $('#add_car').css('display','block')
    let gad=$('.grade_sel .selected').text();
    let ages=$('.age_sel .selected').text();
    if(gad!=''&&ages!=''){
        $('.select_other .span1').text('已选择')
        $('.select_other .span2').text(gad+ages)
    }
    if(gad==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('段位')
    }
    if(ages==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('年龄')
    }
})
$('.car_shadow').on('click',function(){
    $('#add_car').css('display','none')
})
$('.close').on('click',function(){
    $('#add_car').css('display','none')
})
$('.add_button').on('click',function(){
    $('#add_car').css('display','none')
})
$('.buy_button').on('click',function(){
    $('#add_car').css('display','none')
})
//修改数量
$('.cut').on('click',function(){
    let num=$('.number').text()
    if(num>1){
        num--;
        $('.number').text(num)
    }
})
$('.add').on('click',function(){
    let num=$('.number').text()
    num++;
    $('.number').text(num)
    console.log(num)
    
})
//规格选择
$('.grade_sel span').on('click',function(){
    let idx=0;
    $('.grade_sel span').removeClass('selected');
    //console.log($(this).index())
    $(this).addClass('selected');
    let gad=$('.grade_sel .selected').text();
    let ages=$('.age_sel .selected').text();
    if(gad!=''&&ages!=''){
        $('.select_other .span1').text('已选择')
        $('.select_other .span2').text(gad+ages)
        $('.rod_second .secr').text('已选择')
        $('.rod_second .sec_con').text(gad+ages)
    }
    if(gad==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('段位')
        $('.rod_second .secr').text('请选择')
        $('.rod_second .sec_con').text('段位')
    }
    if(ages==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('年龄')
        $('.rod_second .secr').text('请选择')
        $('.rod_second .sec_con').text('年龄')
    }
})
$('.age_sel span').on('click',function(){
    let idx=0;
    $('.age_sel span').removeClass('selected');
    //console.log($(this).index())
    $(this).addClass('selected');
    let gad=$('.grade_sel .selected').text();
    let ages=$('.age_sel .selected').text();
    if(gad!=''&&ages!=''){
        $('.select_other .span1').text('已选择')
        $('.select_other .span2').text(gad+ages)
        $('.rod_second .secr').text('已选择')
        $('.rod_second .sec_con').text(gad+ages)
    }
    if(gad==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('段位')
        $('.rod_second .secr').text('请选择')
        $('.rod_second .sec_con').text('段位')
    }
    if(ages==''){
        $('.select_other .span1').text('选择')
        $('.select_other .span2').text('年龄')
        $('.rod_second .secr').text('请选择')
        $('.rod_second .sec_con').text('年龄')
    }
})
//服务开关
$('.rod_third').on('click',function(){
    $('#custom').css('display','block')
})
$('.custom_shadow').on('click',function(){
    $('#custom').css('display','none')
})
$('.sure_button').on('click',function(){
    $('#custom').css('display','none')
})


//
let gad=$('.grade_sel .selected').text();
let ages=$('.age_sel .selected').text();
if(gad!=''&&ages!=''){
    $('.rod_second .secr').text('已选择')
    $('.rod_second .sec_con').text(gad+ages)
}
if(gad==''){
    $('.rod_second .secr').text('请选择')
    $('.rod_second .sec_con').text('段位')
}
if(ages==''){
    $('.rod_second .secr').text('请选择')
    $('.rod_second .sec_con').text('年龄')
}
//播放按钮
$('.icon_play').on('click',function(){
    $(this).css('display','none')
    $('.close_video').css('display','block')
    $('#detail_swiper img').css('display','none')
    $('video').css('display','block')
    $('video').attr('src','https://jdvodoss.jcloudcache.com/vodtransgzp1251412368/7447398157066838330/v.f30.mp4?dockingId=e94c696c-cc8b-481d-a805-0c40a74c1ad3&storageSource=3')
    $('video').attr('autoplay','autoplay')
    $('video').attr('controls','controls')
    $('video').css('height','px2rem(200px)')
    $('#detail_swiper').css('background','black')
})
$('.fa-times-circle-o').on('click',function(){
    $('.close_video').css('display','none')
    $('#detail_swiper img').css('display','block')
    $('.icon_play').css('display','block')
    $('video').css('display','none')
    $('video').attr('src','')
    $('video').attr('autoplay','')
    $('video').attr('controls','')

})