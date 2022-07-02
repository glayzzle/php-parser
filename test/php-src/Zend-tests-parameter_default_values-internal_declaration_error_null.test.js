// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/internal_declaration_error_null.phpt
  it("The default value is null in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime\n{\n    public static function createFromFormat(): DateTime|false\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
