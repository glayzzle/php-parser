// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65911.phpt
  it("Bug #65911 (scope resolution operator - strange behavior with $this)", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B\n{\n    public function go()\n    {\n        $this->foo = 'bar';\n        echo A::$this->foo; // should not output 'bar'\n    }\n}\n$obj = new B();\n$obj->go();\n?>")).toMatchSnapshot();
  });
});
