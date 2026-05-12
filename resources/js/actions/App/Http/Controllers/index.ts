import AuthController from './AuthController'
import Admin from './Admin'
import Teacher from './Teacher'
import Student from './Student'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    Admin: Object.assign(Admin, Admin),
    Teacher: Object.assign(Teacher, Teacher),
    Student: Object.assign(Student, Student),
}

export default Controllers