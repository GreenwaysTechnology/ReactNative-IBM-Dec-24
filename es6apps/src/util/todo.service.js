
// export default class TodoService {

//     findAll() {
//         return [{ id: 1, status: false, text: 'learn React Native' }]
//     }
// }

export const serviceversion = '1.0.0'
export const companyName = 'IBM'

export class TodoRepository {
    save() {
        return "save"
    }
}

class TodoService {

    findAll() {
        return [{ id: 1, status: false, text: 'learn React Native' }]
    }
}

// export default class TodoService2 {

//     findAll() {
//         return [{ id: 1, status: false, text: 'learn React Native' }]
//     }
// }
export default TodoService