const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // const code = err.statusCode || 500; // Use err.statusCode or default to 500
  // const message = err.message || "Internal Server Error";
  // const stack = err.stack || ""; // Include the stack trace

  // switch (code) {
  //   case constants.VALIDATION_ERROR:
  //     res.status(400).json({
  //       title: "Validation Failed",
  //       message,
  //       stack,
  //     });
  //     break;
  //   case constants.NOT_FOUND:
  //     res.status(404).json({
  //       title: "Not Found",
  //       message,
  //       stack,
  //     });
  //     break;
  //   case constants.UNAUTHORIZED:
  //     res.status(401).json({
  //       title: "Unauthorized",
  //       message,
  //       stack,
  //     });
  //     break;
  //   case constants.FORBIDDEN:
  //     res.status(403).json({
  //       title: "Forbidden",
  //       message,
  //       stack,
  //     });
  //     break;
  //   case constants.SERVER_ERROR:
  //     res.status(500).json({
  //       title: "Server Error",
  //       message,
  //       stack,
  //     });
  //     break;
  //   default:
  //     res.status(code).json({
  //       title: "Error",
  //       message,
  //       stack,
  //     });
  //     break;
  // }
  
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);

};

module.exports = errorHandler;
