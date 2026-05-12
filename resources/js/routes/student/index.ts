import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import quizzes from './quizzes'
import classes from './classes'
/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/student/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const student = {
    dashboard: Object.assign(dashboard, dashboard),
    quizzes: Object.assign(quizzes, quizzes),
    classes: Object.assign(classes, classes),
}

export default student