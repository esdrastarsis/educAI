import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
export const show = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/quizzes/{quiz}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
show.url = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { quiz: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            quiz: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quiz: typeof args.quiz === 'object'
        ? args.quiz.id
        : args.quiz,
    }

    return show.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
show.get = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
show.head = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
const showForm = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
showForm.get = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::show
* @see app/Http/Controllers/Student/StudentQuizController.php:17
* @route '/student/quizzes/{quiz}'
*/
showForm.head = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Student\StudentQuizController::start
* @see app/Http/Controllers/Student/StudentQuizController.php:85
* @route '/student/quizzes/{quiz}/start'
*/
export const start = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/student/quizzes/{quiz}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\StudentQuizController::start
* @see app/Http/Controllers/Student/StudentQuizController.php:85
* @route '/student/quizzes/{quiz}/start'
*/
start.url = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { quiz: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            quiz: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quiz: typeof args.quiz === 'object'
        ? args.quiz.id
        : args.quiz,
    }

    return start.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentQuizController::start
* @see app/Http/Controllers/Student/StudentQuizController.php:85
* @route '/student/quizzes/{quiz}/start'
*/
start.post = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::start
* @see app/Http/Controllers/Student/StudentQuizController.php:85
* @route '/student/quizzes/{quiz}/start'
*/
const startForm = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::start
* @see app/Http/Controllers/Student/StudentQuizController.php:85
* @route '/student/quizzes/{quiz}/start'
*/
startForm.post = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: start.url(args, options),
    method: 'post',
})

start.form = startForm

/**
* @see \App\Http\Controllers\Student\StudentQuizController::submit
* @see app/Http/Controllers/Student/StudentQuizController.php:105
* @route '/student/quizzes/{quiz}/submit'
*/
export const submit = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/student/quizzes/{quiz}/submit',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\StudentQuizController::submit
* @see app/Http/Controllers/Student/StudentQuizController.php:105
* @route '/student/quizzes/{quiz}/submit'
*/
submit.url = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { quiz: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            quiz: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        quiz: typeof args.quiz === 'object'
        ? args.quiz.id
        : args.quiz,
    }

    return submit.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentQuizController::submit
* @see app/Http/Controllers/Student/StudentQuizController.php:105
* @route '/student/quizzes/{quiz}/submit'
*/
submit.post = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::submit
* @see app/Http/Controllers/Student/StudentQuizController.php:105
* @route '/student/quizzes/{quiz}/submit'
*/
const submitForm = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentQuizController::submit
* @see app/Http/Controllers/Student/StudentQuizController.php:105
* @route '/student/quizzes/{quiz}/submit'
*/
submitForm.post = (args: { quiz: string | number | { id: string | number } } | [quiz: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

const StudentQuizController = { show, start, submit }

export default StudentQuizController