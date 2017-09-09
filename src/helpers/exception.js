export class InternalErrorException {
  constructor (description) {
    this.code = 500
    this.message = 'Internal Server Error'
    this.description = description
  }
}

export class BadRequestException {
  constructor (description) {
    this.code = 400
    this.message = 'Bad Request'
    this.description = description
  }
}

export class UnauthorizedException {
  constructor (description) {
    this.code = 401
    this.message = 'Unauthorized'
    this.description = description
  }
}
