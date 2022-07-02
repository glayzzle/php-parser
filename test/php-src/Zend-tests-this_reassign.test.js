// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_reassign.phpt
  it("$this re-assign", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = \"this\";\n    $$a = 0;\n    var_dump($$a);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
