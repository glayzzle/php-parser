// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39346.phpt
  it("Bug #39346 (Unsetting a static variable inside a destructor causes segfault later on)", function () {
    expect(parser.parseCode("<?php\nclass test\n{\n    protected $_id;\n    static $instances;\n    public function __construct($id) {\n        $this->_id = $id;\n        self::$instances[$this->_id] = $this;\n    }\n    function __destruct() {\n        unset(self::$instances[$this->_id]);\n    }\n}\n$test = new test(2);\n$test = new test(1);\n$test = new test(2);\n$test = new test(3);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
