const { Rule, Validator } = require("../../core/validator");

class PositiveIntegerValidator extends Validator {
  constructor() {
    super();
    this.id = [new Rule("isInt", "需要正整数", { min: 1 })];
  }
}

module.exports = {
  PositiveIntegerValidator,
};
