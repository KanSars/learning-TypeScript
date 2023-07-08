interface React {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect: React = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    //color: 'black',
}
// rect.color = 'white';
// rect.id = '5678'; // error: read-only property

const rect2 = {} as React;
const rect3 = <React>{}

// inheritance
interface RectWhithArea extends React {
    getArea: () => number
}

const rect4: RectWhithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

// Class
interface IClock {
    time: Date
    setTime(date: Date): void
}
class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}