class AppError {
  constructor(message, statusCode = 400, errorCode) {
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export { AppError };
