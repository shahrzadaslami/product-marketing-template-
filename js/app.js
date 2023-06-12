class parallaxTiltEffect {
    constructor({ element, tiltEffect }) {
        this.element = element;
        this.container = this.element.querySelector(".container");
        this.size = [300, 360];
        [this.w, this.h] = this.size;

        this.tiltEffect = tiltEffect;
        this.mouseOnComponent = false;
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);
        this.init = this.init.bind(this);
        this.init();
    }
    handleMouseMove(event) {
        const { offsetX, offsetY } = event;
        let X;
        let Y;

        if (this.tiltEffect == "reverse") {
            X = ((offsetX - (this.w / 1)) / 6) / 6;
            Y = (-(offsetY - (this.h / 1)) / 6) / 6;
        }
        else if (this.tiltEffect == "normal") {
            X = (-(offsetX - (this.w / 2)) / 6) / 6;
            Y = ((offsetY - (this.h / 2)) / 6) / 6;
        }

        this.setProperty('--rY', X.toFixed(2));
        this.setProperty('--rX', Y.toFixed(2));

        this.setProperty('--bY', (80 - (X / 4).toFixed(2)) + '%');
        this.setProperty('--bX', (80 - (Y / 4).toFixed(2)) + '%');
    }
    handleMouseEnter() {
        this.mouseOnComponent = true;
        this.container.classList.add("container--active");
    }
    handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
    }
    defaultStates() {
        this.container.classList.remove("container--active");
        this.setProperty('--rY', 0);
        this.setProperty('--rX', 0);
        this.setProperty('--bY', '80%');
        this.setProperty('--bX', '50%');
    }

    setProperty(p, v) {
        return this.container.style.setProperty(p, v);
    }

    init() {
        this.element.addEventListener('mousemove', this.handleMouseMove);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
}
const $ = e => document.querySelector(e);

const wrap1 = new parallaxTiltEffect({
    element: $('.wrap--1'),
    tiltEffect: 'reverse'
})
const wrap2 = new parallaxTiltEffect({
    element: $('.wrap--2'),
    tiltEffect: 'normal'
})
const wrap3 = new parallaxTiltEffect({
    element: $('.wrap--3'),
    tiltEffect: 'reverse'
})



const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updCount = () => {
        const target = counter.getAttribute('data-target');
        const count = +counter.innerText;

        const score = target / speed;
        if (count < target) {
            counter.innerText = count + score;
            setTimeout(updCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updCount();
});

