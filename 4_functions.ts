function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

// перегрузка
interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
    default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
    if (typeof a === 'undefined' && typeof b === 'undefined') {
        return { x: undefined, y: undefined };
    }

    if (typeof a === 'number' && typeof b === 'undefined') {
        return { x: a, y: undefined, default: 'asd' };
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return { x: a, y: b };
    }

    throw new Error('Invalid arguments');
}

console.log('Empty: ', position());
console.log('One param: ', position(10));
console.log('Two params: ', position(10, 20));
