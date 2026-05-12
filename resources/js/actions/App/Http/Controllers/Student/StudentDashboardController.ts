import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
const StudentDashboardController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StudentDashboardController.url(options),
    method: 'get',
})

StudentDashboardController.definition = {
    methods: ["get","head"],
    url: '/student/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
StudentDashboardController.url = (options?: RouteQueryOptions) => {
    return StudentDashboardController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
StudentDashboardController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StudentDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
StudentDashboardController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StudentDashboardController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
const StudentDashboardControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StudentDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
StudentDashboardControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StudentDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentDashboardController::__invoke
* @see app/Http/Controllers/Student/StudentDashboardController.php:13
* @route '/student/dashboard'
*/
StudentDashboardControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StudentDashboardController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StudentDashboardController.form = StudentDashboardControllerForm

export default StudentDashboardController