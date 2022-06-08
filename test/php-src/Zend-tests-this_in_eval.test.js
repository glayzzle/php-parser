// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_eval.phpt
  it("$this in eval() block", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function foo() {\n        eval('var_dump($this);');\n        eval('var_dump($this);');\n    }\n}\n$x = new C;\n$x->foo();\n?>")).toMatchSnapshot();
  });
});
