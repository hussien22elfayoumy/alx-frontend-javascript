export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this.code;
  }

  set code(newCode) {
    this._code = newCode;
  }
}
