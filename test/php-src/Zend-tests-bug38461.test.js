// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38461.phpt
  it("Bug #38461 (setting private attribute with __set() produces segfault)", function () {
    expect(parser.parseCode("<?php\nclass Operation\n{\n    function __set( $var, $value )\n    {\n        $this->$var = $value;\n    }\n}\nclass ExtOperation extends Operation\n{\n    private $x;\n}\n$op = new ExtOperation;\n$op->x = 'test';\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
