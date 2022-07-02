// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68370.phpt
  it("Bug #68370 \"unset($this)\" can make the program crash", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public function test() {\n        unset($this);\n        return get_defined_vars();\n    }\n}\n$c = new C();\n$x = $c->test();\nprint_r($x);\nunset($c, $x);\n?>")).toMatchSnapshot();
  });
});
