/**
 * @description This is a function for horizontal scroll by wheel, by touch & mousedown
 * @constructor HorizontalScroll
 * @param {string} targetsElement .class, #id, tag
 * @tutorial create new target object -> new HorizontalScroll(target element)
 * @tutorial call touch & mousedown scroll -> elem.touchScroll();
 * @tutorial mouse wheel scroll -> elem.wheelScroll();
 * @example let someName = new HorizontalScroll('.elem');
 * someName.touchScroll();
 * someName.wheellScroll();
 * */
function HorizontalScroll(elem) {
    this.elem = elem;

    this.touchScroll = function () {
        let obj = document.querySelector(this.elem);
        let startX, startY;

        function points() {
            startX = obj.scrollLeft + event.pageX;
            startY = obj.scrollTop + event.pageY;
            return startX, startY;
        }

        function move() {
            obj.scrollLeft = startX - event.pageX;
            obj.scrollTop = startY - event.pageY;
            return false;
        }

        obj.addEventListener('mousedown', function () {
            points();
            obj.addEventListener('mousemove', move);
            obj.onmouseup = function () {
                obj.removeEventListener('mousemove', move);
                obj.onmouseup = null;
            }
        });
    }

    this.wheellScroll = function () {
        let obj = document.querySelector(this.elem);

        obj.addEventListener('wheel', function(e) {
            let direction = e.detail ? e.detail * (-120) : e.wheelDelta;
            if (direction > 0) {
                direction = this.scrollLeft - 120;
            } else {
                direction = this.scrollLeft + 120;
            }
            this.scrollLeft = direction;
        });
    }
}

let wrapperTouchScroll = new HorizontalScroll('.wrapper');
wrapperTouchScroll.touchScroll();
wrapperTouchScroll.wheellScroll();