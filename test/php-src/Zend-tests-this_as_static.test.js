// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_as_static.phpt
  it("$this as static variable", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    static $this;\n    var_dump($this);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
