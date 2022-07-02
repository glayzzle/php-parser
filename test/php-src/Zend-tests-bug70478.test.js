// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70478.phpt
  it("Bug #70478 (**= does no longer work)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $a = 3;\n    private $b = 4;\n    function __construct() {\n        $this->a **= $this->b;\n    }\n}\n$a = new foo;\nvar_dump($a->a);\n?>")).toMatchSnapshot();
  });
});
