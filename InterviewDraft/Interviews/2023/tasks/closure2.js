let x = {a: 1, b: 2};

function fn1(x) {
    x.a = 5;
}

function fn2() {
    x.a = 4;
}

function fn3(x) {
    x = 5;
}

function fn4() {
    x = 5;
}

fn1(x);
console.log(x); // ?

fn2(x);
console.log(x); // ?

fn3(x);
console.log(x); // ?

fn4(x);
console.log(x); // S
