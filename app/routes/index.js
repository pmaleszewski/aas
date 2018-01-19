const router = require('express').Router()
const clientRoutes = require('./client.routes')
const messageRoutes = require('./messages.routes')

// const authenticate = require('../filters/authenticate')

module.exports = router

// check authentication for all requests
// router.use(authenticate)

// API routes (group routing modules here - no empty lines between)
// router.use('/api/hackers', hackersRoutes)
// router.use('/api/entities', entitiesRoutes)
// router.use('/api/examples', examplesRoutes)



// register client routes

router.use('/api/messages', messageRoutes)
router.use(clientRoutes)

// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router)


function useAPIErrorHandlers(router) {
    // Handle API 404
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    // Handle API 500
    router.use((err, req, res, next) => {
        // If the error object doesn't exists
        if (!err) {
            return next()
        }

        // Log it
        console.error(err.stack)

        // Redirect to error page
        res.sendStatus(500)
    })
}