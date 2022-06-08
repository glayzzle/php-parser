// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/parameter_default_values/internal_declaration_error_false.phpt
  it("The default value is false in the parent class method's signature.", function () {
    expect(parser.parseCode("<?php\ninterface MyDateTimeInterface extends DateTimeInterface\n{\n    public function diff(): DateInterval;\n}\n?>")).toMatchSnapshot();
  });
});
