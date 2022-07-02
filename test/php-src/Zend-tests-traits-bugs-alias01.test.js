// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/alias01.phpt
  it("Aliases are applied to the correct methods, and only to them.", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n  function m1() { echo \"T:m1\\n\"; }\n  function m2() { echo \"T:m2\\n\"; }\n}\nclass C1 {\n  use T1 { m1 as a1; }\n}\n$o = new C1;\n$o->m1();\n$o->a1();\n$o->m2();\n$o->a2();\n?>")).toMatchSnapshot();
  });
});
