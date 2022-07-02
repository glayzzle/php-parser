// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/internal_declaration_error_class_const.phpt
  it("The default value is a class constant in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeZone extends DateTimeZone\n{\n    public static function listIdentifiers(): array\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
