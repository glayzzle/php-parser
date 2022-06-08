// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/internal_declaration_error_const.phpt
  it("The default value is a constant in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeZone extends DateTimeZone\n{\n    public function getTransitions(): array|false\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
