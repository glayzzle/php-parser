// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81652.phpt
  it("Bug #81652: The value of error_reporting() gets overridden", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $a;\n    public function bar() {\n        $this->a = true ? @random_int(0, 100) : false;\n    }\n}\nvar_dump(error_reporting());\n$c = new Foo();\n$c->bar();\nvar_dump(error_reporting());\n?>")).toMatchSnapshot();
  });
});
