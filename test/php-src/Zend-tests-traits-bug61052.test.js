// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug61052.phpt
  it("Bug #61052 (missing error check in trait 'insteadof' clause)", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n  function foo(){ echo \"T1\\n\"; }\n}\ntrait T2 {\n  function foo(){ echo \"T2\\n\"; }\n}\nclass C {\n  use T1, T2 {\n    T1::foo insteadof T1;\n  }\n}\nC::foo();\n?>")).toMatchSnapshot();
  });
});
