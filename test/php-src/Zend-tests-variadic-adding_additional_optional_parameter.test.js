// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/adding_additional_optional_parameter.phpt
  it("It's possible to add additional optional arguments with matching signature", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, string ...$params);\n}\nclass MySQL implements DB {\n    public function query($query, string $extraParam = null, string ...$params) { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
