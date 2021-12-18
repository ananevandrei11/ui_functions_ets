$(document).ready(function() {
  let messenger = document.querySelector('.messenger');
  /*
  messenger.onmousedown = function(event) {
    let messengerChat = document.querySelector('#ib-button-messaging');
    let messengerBtn = document.querySelector('.messenger-btn');
    
    let shiftX = event.clientX - messenger.getBoundingClientRect().left;
    let shiftY = event.clientY - messenger.getBoundingClientRect().top;

    // Отдельная функция, т.к. ее надо отменить в конце перетаскивания
    function moveAt(pageX, pageY) {
      messenger.style.left = pageX - shiftX + 'px';
      messenger.style.top = pageY - shiftY + 'px';
      messengerChat.style.right = 'auto';
      messengerChat.style.bottom = 'auto';
      messengerChat.style.left = pageX - shiftX + 'px';
      messengerChat.style.top = pageY - shiftY - 70 + 'px';
    }

    // Определение точек для начала / отмены перетаскивания чата
    let startX = event.clientX;
    let startY = event.clientY;
    function onMouseMove(event) {
      let diffPointX = Math.abs(startX - event.clientX);
      let diffPointY = Math.abs(startY - event.clientY);
      if(diffPointX > 30 || diffPointY > 30) {
        moveAt(event.clientX, event.clientY);
        messengerBtn.style.pointerEvents = 'none';
      }
    }
  
    // передвигаем чат при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // отпускаем чат и удаляем функцию и обработчки движения
    messenger.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      messenger.onmouseup = null;
      messengerBtn.style.pointerEvents = 'auto';
    };
  };
  
  messenger.ondragstart = function() {
    return false;
  };
  */
  let hWindow = $(window).innerHeight();
  let x1 = 20;
  let y1 = Math.abs(document.body.getBoundingClientRect().top) + 20;
  let x2 = document.body.getBoundingClientRect().width - 100;
  let y2 = Math.abs(document.body.getBoundingClientRect().top) + $(window).innerHeight() - 20;
  console.log(document.body.getBoundingClientRect());
  console.log($(window).innerHeight());
  $( ".messenger" ).draggable({
    containment: '.container-content',
    // containment: [
    //   x1,
    //   (Math.abs(document.body.getBoundingClientRect().top) + 20), 
    //   (document.body.getBoundingClientRect().width - 100), 
    //   (Math.abs(document.body.getBoundingClientRect().top) + $(window).innerHeight() - 20)
    // ],
    distance: 30,
    scroll: false,
    start: function() {
      $('.messenger-btn').css('pointer-events', 'none');
      $('#ib-button-messaging').css({'right': 'auto', 'bottom':'auto'});
    },
    drag: function(eventn, ui) {
      $('#ib-button-messaging').css({'left': `${ui.position.left}px`, 'top': `${ui.position.top - 70}px`});
    },
    stop: function(eventn, ui) {
      $('.messenger-btn').css('pointer-events', 'auto');
    }
  });
});
