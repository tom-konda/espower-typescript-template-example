declare let Hoge:HogeConstructor;

interface HogeConstructor{
    new (): Hoge;
}

interface Hoge {
    add(x, y):number;
    subtract(x, y):number;
    multiply(x, y):number;
    divide(x, y):number;
}