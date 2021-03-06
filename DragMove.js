/**
 * @class
 * @description This is a function for drag element by touch & mousedown
 * @constructor DragMove
 * @param {string} targetsElement .class, #id, tag
 * @tutorial create new target object -> new DragMove(target element)
 * @tutorial call touch & mousedown drag -> elem.drag();
 * @example let someName = new DragMove('.elem');
 * someName.drag();
 * */
function DragMove(elem) {
	this.elem = elem;

	this.drag = function () {
		const obj = document.querySelector(this.elem);
		
		obj.addEventListener('mousedown', function (e) {
			let shiftX = e.clientX - obj.getBoundingClientRect().left;
			let shiftY = e.clientY - obj.getBoundingClientRect().top;
			obj.style.bottom = 'auto';
			obj.style.right = 'auto';
			
			function moveAt(pageX, pageY) {
				obj.style.left = pageX - shiftX + 'px';
				obj.style.top = pageY - shiftY + 'px';
			}

			function onMove(e) {
				moveAt(e.pageX, e.pageY);
			}

			moveAt(e.pageX, e.pageY);

			document.addEventListener('mousemove', onMove);

			obj.onmouseup = function () {
				document.removeEventListener('mousemove', onMove);
				obj.onmouseup = null;
			};
		});
		
		obj.addEventListener('touchstart', function (e) {
			let shiftX = e.targetTouches[0].clientX - obj.getBoundingClientRect().left;
			let shiftY = e.targetTouches[0].clientY - obj.getBoundingClientRect().top;

			obj.style.bottom = 'auto';
			obj.style.right = 'auto';
			
			function moveAt(pageX, pageY) {
				obj.style.left = pageX - shiftX + 'px';
				obj.style.top = pageY - shiftY + 'px';
			}

			function onMove(e) {
				moveAt(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
			}

			moveAt(e.targetTouches[0].pageX, e.targetTouches[0].pageY);

			document.addEventListener('touchmove', onMove);

			obj.ontouchend = function () {
				document.removeEventListener('touchmove', onMove);
				obj.ontouchend = null;
			};
		});

		obj.ondragstart = function() {
			return false;
		};
	}
}

let dragMoveChat = new DragMove('.drag_move');
dragMoveChat.drag();