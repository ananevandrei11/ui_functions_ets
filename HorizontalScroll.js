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
        const obj = document.querySelector(this.elem);
        let isDown = false;
        let startX;
        let scrollLeft;

        obj.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - obj.offsetLeft;
            scrollLeft = obj.scrollLeft;
        });
        obj.addEventListener('mouseleave', () => {
            isDown = false;
        });
        obj.addEventListener('mouseup', () => {
            isDown = false;
        });
        obj.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - obj.offsetLeft;
            const walk = (x - startX) * 1;
            obj.scrollLeft = scrollLeft - walk;
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
