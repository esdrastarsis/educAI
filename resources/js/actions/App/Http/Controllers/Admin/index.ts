import UserManagementController from './UserManagementController'
import ClassManagementController from './ClassManagementController'

const Admin = {
    UserManagementController: Object.assign(UserManagementController, UserManagementController),
    ClassManagementController: Object.assign(ClassManagementController, ClassManagementController),
}

export default Admin