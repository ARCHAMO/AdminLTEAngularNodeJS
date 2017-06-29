export class User {
    constructor (
       public id: string,
       public primerNombre: string,
       public primerApellido: string,
       public password: string,
       public email: string,
       public imagen: string
    ){}
}