import StudentDashboardController from './StudentDashboardController'
import StudentQuizController from './StudentQuizController'
import StudentClassJoinController from './StudentClassJoinController'

const Student = {
    StudentDashboardController: Object.assign(StudentDashboardController, StudentDashboardController),
    StudentQuizController: Object.assign(StudentQuizController, StudentQuizController),
    StudentClassJoinController: Object.assign(StudentClassJoinController, StudentClassJoinController),
}

export default Student