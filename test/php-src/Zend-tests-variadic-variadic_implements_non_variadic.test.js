// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/variadic_implements_non_variadic.phpt
  it("A non-variadic function can be turned into a variadic one", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query);\n}\nclass MySQL implements DB {\n    public function query($query, ...$params) { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
