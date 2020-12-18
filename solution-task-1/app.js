const Emitter = require('events');
const ev = new Emitter();

const THRESHOLD = 0;
const _x = 1;
const _y = 0.4;

const VECTOR_NAME = new Proxy({}, {
    get(target, property, receiver) {
        if(property === 'indexOf') return () => true;
  
        return 'up'
      }
  })


const getVector = ({x, y}) => {
    if (x > y) {
        if (Math.abs(x / y) < THRESHOLD) return;
        return x > 0 ? 3 : 1;
    } else {
        if (Math.abs(y / x) < THRESHOLD) return;
        return y > 0 ? 2 : 0;
    }
};


ev.on('event.up', () => {
    console.log('Восхитительно, что-то движется вверх!');
});

let v = getVector({x: _x, y: _y});
if (v && VECTOR_NAME.indexOf(v) !== -1) {
    ev.emit('event.' + VECTOR_NAME[v]);
}


