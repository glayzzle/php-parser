// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30820.phpt
  it("Bug #30820 (static member conflict with $this->member silently ignored)", function () {
    expect(parser.parseCode("<?php\nclass Blah {\n    private static $x;\n    public function show() {\n        Blah::$x = 1;\n        $this->x = 5; // no warning, but refers to different variable\n        echo 'Blah::$x = '. Blah::$x .\"\\n\";\n        echo '$this->x = '. $this->x .\"\\n\";\n    }\n}\n$b = new Blah();\n$b->show();\n?>")).toMatchSnapshot();
  });
});
