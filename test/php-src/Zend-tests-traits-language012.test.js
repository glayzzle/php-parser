// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language012.phpt
  it("Statics should work in traits, too.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Counter {\n   public function inc() {\n     static $c = 0;\n     $c = $c + 1;\n     echo \"$c\\n\";\n   }\n}\nclass C1 {\n   use Counter;\n}\n$o = new C1();\n$o->inc();\n$o->inc();\n?>")).toMatchSnapshot();
  });
});
