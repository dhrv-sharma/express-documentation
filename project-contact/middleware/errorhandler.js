const {constants}=require("../constant")
const errorHandler = (err, req, res, next) => {
    console.log(res.statusCode);

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack, statusCode: statusCode });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Not Found ", message: err.message, stackTrace: err.stack, statusCode: statusCode });
            break;

        default:
            break;

    }

};


module.exports = errorHandler;

