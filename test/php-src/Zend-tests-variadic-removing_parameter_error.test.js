// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/removing_parameter_error.phpt
  it("It is possible to remove required parameter before a variadic parameter", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, ...$params);\n}\nclass MySQL implements DB {\n    public function query(...$params) { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
