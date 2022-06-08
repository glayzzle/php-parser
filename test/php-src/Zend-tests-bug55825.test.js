// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55825.phpt
  it("Bug #55825 (Missing initial value of static locals in trait methods)", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    public function inc() {\n        static $x=1;\n        echo $x++ . \"\\n\";\n    }\n}\nclass C { use T1; }\n$c1 = new C;\n$c1->inc();\n$c1->inc();\n?>")).toMatchSnapshot();
  });
});
