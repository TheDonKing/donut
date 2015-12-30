$(document).ready(function() {

    //Плавный скролл
    $("html").niceScroll();

    //HEADER на всю ширину
    function heightDetect(){
        $(".page1").css("height", $(window).height());
    }

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    //Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();



    $(".scroll").click(function(event){
//Перехватываем обработку по умолчанию события нажатия мыши
        event.preventDefault();

//Получаем полный url - например, mysitecom/index.htm#home
        var full_url = this.href;

//Разделяем url по символу # и получаем имя целевой секции - home в адресе mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

//Получаем смещение сверху для целевой секции
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top;

//Переходим в целевую секцию установкой позиции прокрутки страницы в позицию целевой секции
        $('html, body').animate({scrollTop:target_top}, 1500);
    });


//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});