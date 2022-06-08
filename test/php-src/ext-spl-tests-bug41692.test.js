// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug41692.phpt
  it("Bug #41692 (ArrayObject shows weird behaviour in respect to inheritance)", function () {
    expect(parser.parseCode("<?php\nclass Bar extends ArrayObject {\n    private $foo = array( 1, 2, 3 );\n    function __construct()\n    {\n        parent::__construct($this->foo);\n    }\n}\n$foo = new Bar();\nvar_dump($foo);\n$foo['foo'] = 23;\n$bar = new Bar();\nvar_dump($bar);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
