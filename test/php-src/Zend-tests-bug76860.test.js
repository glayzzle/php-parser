// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76860.phpt
  it("Bug #76860 (Missed \"Accessing static property as non static\" warning)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private   static $a = \"a\";\n    protected static $b = \"b\";\n    public    static $c = \"c\";\n    public function __construct() {\n    var_dump($this->a, $this->b, $this->c);\n    }\n}\nclass B extends A {\n}\nnew B;\n?>")).toMatchSnapshot();
  });
});
