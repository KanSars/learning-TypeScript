interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';
// но
//key = 'job' // предупреждение об ошибке, т.к. key может принимать значения 'name или 'age'

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

// создаем новый тип, исключающий некоторые поля User
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'> // останутся только поля 'name' и 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // так же останутся только поля 'name' и 'email'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id' // сообщение об ошибке, т.к. мы исключили '_id' в UserKeysNoMeta1