import TeacherDashboardController from './TeacherDashboardController'
import QuizController from './QuizController'

const Teacher = {
    TeacherDashboardController: Object.assign(TeacherDashboardController, TeacherDashboardController),
    QuizController: Object.assign(QuizController, QuizController),
}

export default Teacher