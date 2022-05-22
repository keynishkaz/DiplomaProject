let optionValue = {width: 100}
let currentElement = null
let nameAnimation,
	
testElem = $('.testEffect img');

$('#option').on("submit", function(event) {
				event.preventDefault()
				const form = event.target;				
				const body = new FormData(form);
				for(var pair of body.entries()) {
									/*/optionValue=
										{
					...optionValue, 
					pair[0]:pair[1]
										}*/
												}
											})


/*при выборе анимации*/
$('.elemAnimation').on("click", function() {
    nameAnimation = $(this).attr('data-name-animation');
currentElement = $(this)
	console.log(currentElement)
	Object.keys(optionValue).map((key)=>{
		$(this).css(key, currentElement[key])
	})
    if($(this).hasClass('active')) {
        $(this).removeClass('active');

        $('.blockResultSelect .listResutSelect').find(".selectElem_"+nameAnimation+"").remove();
    }
    else {
        $(this).addClass('active');

        $('.blockResultSelect .listResutSelect').append("<li class='selectElem selectElem_"+nameAnimation+"'>"+nameAnimation+"</li>")
    }

    if($('.elemAnimation.active').length > 0) {
        $('.blockResultSelect').css('display', 'flex')
    }

})

/*при наведение на анимацию*/
$(".elemAnimation")
.mouseenter(function() {
    nameAnimation = $(this).attr('data-name-animation');

    $(testElem).attr('class', ''); 
    $(testElem).addClass(nameAnimation);
})
.mouseleave(function(){                 
    $(testElem).attr('class', ''); 
});


let fullCode;
$(".butGetResult").on('click', function() {

    fullCode = '';

    $(".elemAnimation.active").each(function() {
        fullCode = fullCode + $(this).find('.codeAnimation').html();
    })

    $(".modelViewCode .codeBlock").html(fullCode)

    $(".modelViewCode").css("display", "flex")

})

$('.butExit').on('click', function() {
    $(".modelViewCode").css("display", "none")
})


//Функция для копирования текста в буфер обмена
function copyToClipboard(str) {
    var area = document.createElement('textarea');
    
    document.body.appendChild(area);
    area.value = str;
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
}

let butCopyCode = document.querySelector('.modelViewCode .copyCode');

//Получаем наш тестовый элемент с текстом
let textCode = document.querySelector('.modelViewCode .codeBlock');

//Вешаем на элемент событие. Код будет выполняться после нажатия 
butCopyCode.addEventListener('click', ()=>{
    copyToClipboard(textCode.innerHTML);

    butCopyCode.innerHTML = '<span style="color: green;">Код скопирован</span>';
    butCopyCode.style.background = '#fff';
})

$('.resetCode').on('click', function() {
    $(".elemAnimation.active").removeClass('active')

    $('.blockResultSelect .listResutSelect .selectElem').remove()
})

