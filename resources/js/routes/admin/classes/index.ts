import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ClassManagementController::store
* @see app/Http/Controllers/Admin/ClassManagementController.php:13
* @route '/admin/classes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/classes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::store
* @see app/Http/Controllers/Admin/ClassManagementController.php:13
* @route '/admin/classes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::store
* @see app/Http/Controllers/Admin/ClassManagementController.php:13
* @route '/admin/classes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::store
* @see app/Http/Controllers/Admin/ClassManagementController.php:13
* @route '/admin/classes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::store
* @see app/Http/Controllers/Admin/ClassManagementController.php:13
* @route '/admin/classes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::destroy
* @see app/Http/Controllers/Admin/ClassManagementController.php:27
* @route '/admin/classes/{class}'
*/
export const destroy = (args: { class: string | number | { id: string | number } } | [classParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/classes/{class}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::destroy
* @see app/Http/Controllers/Admin/ClassManagementController.php:27
* @route '/admin/classes/{class}'
*/
destroy.url = (args: { class: string | number | { id: string | number } } | [classParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { class: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { class: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            class: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        class: typeof args.class === 'object'
        ? args.class.id
        : args.class,
    }

    return destroy.definition.url
            .replace('{class}', parsedArgs.class.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::destroy
* @see app/Http/Controllers/Admin/ClassManagementController.php:27
* @route '/admin/classes/{class}'
*/
destroy.delete = (args: { class: string | number | { id: string | number } } | [classParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::destroy
* @see app/Http/Controllers/Admin/ClassManagementController.php:27
* @route '/admin/classes/{class}'
*/
const destroyForm = (args: { class: string | number | { id: string | number } } | [classParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClassManagementController::destroy
* @see app/Http/Controllers/Admin/ClassManagementController.php:27
* @route '/admin/classes/{class}'
*/
destroyForm.delete = (args: { class: string | number | { id: string | number } } | [classParam: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const classes = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default classes