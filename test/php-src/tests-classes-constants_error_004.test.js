// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_004.phpt
  it("Class constant whose initial value references a non-existent class", function () {
    expect(parser.parseCode("<?php\n  class C\n  {\n      const c1 = D::hello;\n  }\n  $a = new C();\n?>")).toMatchSnapshot();
  });
});
