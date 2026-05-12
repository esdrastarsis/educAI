import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
export const show = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/classes/join/{code}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
show.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return show.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
show.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
show.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
const showForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
showForm.get = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::show
* @see app/Http/Controllers/Student/StudentClassJoinController.php:15
* @route '/student/classes/join/{code}'
*/
showForm.head = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Student\StudentClassJoinController::store
* @see app/Http/Controllers/Student/StudentClassJoinController.php:43
* @route '/student/classes/join/{code}'
*/
export const store = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/student/classes/join/{code}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::store
* @see app/Http/Controllers/Student/StudentClassJoinController.php:43
* @route '/student/classes/join/{code}'
*/
store.url = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { code: args }
    }

    if (Array.isArray(args)) {
        args = {
            code: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        code: args.code,
    }

    return store.definition.url
            .replace('{code}', parsedArgs.code.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::store
* @see app/Http/Controllers/Student/StudentClassJoinController.php:43
* @route '/student/classes/join/{code}'
*/
store.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::store
* @see app/Http/Controllers/Student/StudentClassJoinController.php:43
* @route '/student/classes/join/{code}'
*/
const storeForm = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Student\StudentClassJoinController::store
* @see app/Http/Controllers/Student/StudentClassJoinController.php:43
* @route '/student/classes/join/{code}'
*/
storeForm.post = (args: { code: string | number } | [code: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const join = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
}

export default join