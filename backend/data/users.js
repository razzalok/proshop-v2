import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Jhon Doe',
        email:'jhon@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'Alok',
        email:'alok@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
]

export default users