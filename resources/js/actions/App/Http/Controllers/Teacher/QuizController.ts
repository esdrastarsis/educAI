import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Teacher\QuizController::store
* @see app/Http/Controllers/Teacher/QuizController.php:13
* @route '/teacher/quizzes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/teacher/quizzes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Teacher\QuizController::store
* @see app/Http/Controllers/Teacher/QuizController.php:13
* @route '/teacher/quizzes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teacher\QuizController::store
* @see app/Http/Controllers/Teacher/QuizController.php:13
* @route '/teacher/quizzes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Teacher\QuizController::store
* @see app/Http/Controllers/Teacher/QuizController.php:13
* @route '/teacher/quizzes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Teacher\QuizController::store
* @see app/Http/Controllers/Teacher/QuizController.php:13
* @route '/teacher/quizzes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const QuizController = { store }

export default QuizController