// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_basic_006.phpt
  it("Ensure class constants are not evaluated when a class is looked up to resolve inheritance during runtime.", function () {
    expect(parser.parseCode("<?php\n  class C\n  {\n      const X = E::A;\n      public static $a = array(K => D::V, E::A => K);\n  }\n  eval('class D extends C { const V = \\'test\\'; }');\n  class E extends D\n  {\n      const A = \"hello\";\n  }\n  define('K', \"nasty\");\n  var_dump(C::X, C::$a, D::X, D::$a, E::X, E::$a);\n?>")).toMatchSnapshot();
  });
});
