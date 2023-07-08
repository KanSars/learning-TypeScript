const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [String, number] = ['Name', 25];

// Any
let variable: any = 42;
variable = 'string';

// Void
function sayMyName(name: string): void {
    console.log(name);
}

// Never
function fromError(message: string): never {
    throw new Error(message);
}

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = '1234';
const id2: ID = 1234;

// Null and underfined
type SomeType = string | null | undefined;