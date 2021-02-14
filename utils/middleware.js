const logger = require('./logger');

const errorHandler = (error, request, response, next) =>{
    logger.error(error.message);

    if(error.name === "CastError"){
        response.status(404).send({error: "malformatted id"})
    }
    else if (error.name === "ValidationError"){
        response.status(404).send({error: "unvalidated content"})
    }
    next(error)
}

const requestlogger = (request, response, next) =>{
    logger.info("Method:", request.method)
    logger.info("Body:", request.body)
    logger.info("Path:", request.path)
    logger.info("---")
    next()
}
const unknownEndpoint = (request, response) =>{
    response.status(404).send({error: 'unknown endpoint'})
}

module.exports = {
    errorHandler,
    requestlogger,
    unknownEndpoint
} 
