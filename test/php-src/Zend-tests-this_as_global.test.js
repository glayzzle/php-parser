// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_as_global.phpt
  it("$this as global variable", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    global $this;\n    var_dump($this);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
