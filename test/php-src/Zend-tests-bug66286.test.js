// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66286.phpt
  it("Bug #66286: Incorrect object comparison with inheritance", function () {
    expect(parser.parseCode("<?php\nabstract class first {\n    protected $someArray = array();\n}\nclass second extends first {\n    protected $someArray = array();\n    protected $someValue = null;\n    public function __construct($someValue) {\n        $this->someValue = $someValue;\n    }\n}\n$objFirst = new second('123');\n$objSecond = new second('321');\nvar_dump ($objFirst == $objSecond);\n?>")).toMatchSnapshot();
  });
});
