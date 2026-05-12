import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
const TeacherDashboardController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeacherDashboardController.url(options),
    method: 'get',
})

TeacherDashboardController.definition = {
    methods: ["get","head"],
    url: '/teacher/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
TeacherDashboardController.url = (options?: RouteQueryOptions) => {
    return TeacherDashboardController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
TeacherDashboardController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: TeacherDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
TeacherDashboardController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: TeacherDashboardController.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
const TeacherDashboardControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeacherDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
TeacherDashboardControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeacherDashboardController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Teacher\TeacherDashboardController::__invoke
* @see app/Http/Controllers/Teacher/TeacherDashboardController.php:15
* @route '/teacher/dashboard'
*/
TeacherDashboardControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: TeacherDashboardController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

TeacherDashboardController.form = TeacherDashboardControllerForm

export default TeacherDashboardController