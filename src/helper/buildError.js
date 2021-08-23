import HttpStatus from 'http-status-codes'

const buildError=(err)=>{
    if (err.code && err.code=== "3D000") {
        return {
            code: HttpStatus.NOT_FOUND,
            message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
        };
    }

    if(err.code && err.code >= 23000 && err.code <= 23505)
        return {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
        };

    // Return INTERNAL_SERVER_ERROR for all other cases
    return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
    };
}

export default buildError;