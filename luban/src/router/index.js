var routes = []
import web from '~/pages/web/app/app.vue'
import window from '~/pages/window/app/app.vue'
routes.push({
    path: '/web',
    component: web
})
routes.push({
    path: '/window',
    component: window
})
routes.push({
    path: '*',
    component: web
})

export default routes