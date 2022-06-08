// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29104.phpt
  it("Bug #29104 (Function declaration in method doesn't work)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n  function g()\n  {\n    echo \"function g - begin\\n\";\n    function f()\n    {\n      echo \"function f\\n\";\n    }\n    echo \"function g - end\\n\";\n  }\n}\n$a = new A;\n$a->g();\nf();\n?>")).toMatchSnapshot();
  });
});
