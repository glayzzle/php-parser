// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_as_parameter.phpt
  it("$this as parameter", function () {
    expect(parser.parseCode("<?php\nfunction foo($this) {\n    var_dump($this);\n}\nfoo(5);\n?>")).toMatchSnapshot();
  });
});
