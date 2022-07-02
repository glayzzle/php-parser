// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/internal_declaration_error_int.phpt
  it("The default value is an integer in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime\n{\n    public function setTime(int $hour, int $minute, int $second = 0, bool $microsecond = false): DateTime\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
