class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: typeScript version os ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly nemberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel; // readonly можно перезаписать внутри конструктора
    }
}

class Car2 {
    readonly nemberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// модификаторы
class Animal {
    protected voice: string = '';   // доступ внутри класса и классах-наследниках
    public color: string = 'black'; // public по умолчанию, если не указан отличный от public

    // для private можем вызвать go:
    //constructor() {
    //    this.go();
    //}

    private go() {          // доступ только внутри класса
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();

// абстрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
     render(): void {
         console.log('render');
         
     }
     info(): string {
         return 'This is info';
     }
}
