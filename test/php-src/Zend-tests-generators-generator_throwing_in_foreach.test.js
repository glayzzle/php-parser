// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_throwing_in_foreach.phpt
  it("Exceptions throwing by generators during foreach iteration are properly handled", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    throw new Exception(\"foo\");\n    yield; // force generator\n}\nforeach (gen() as $value) { }\n?>")).toMatchSnapshot();
  });
});
