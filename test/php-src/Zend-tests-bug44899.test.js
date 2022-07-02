// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44899.phpt
  it("Bug #44899 (__isset usage changes behavior of empty())", function () {
    expect(parser.parseCode("<?php\nclass myclass\n{\n    private $_data = array();\n    function __construct($data)\n    {\n        $this->_data = $data;\n    }\n    function __isset($field_name)\n    {\n        return isset($this->_data[$field_name]);\n    }\n}\n$arr = array('foo' => '');\n$myclass = new myclass($arr) ;\necho (isset($myclass->foo)) ? 'isset' : 'not isset';\necho \"\\n\";\necho (empty($myclass->foo)) ? 'empty' : 'not empty';\necho \"\\n\";\necho ($myclass->foo) ? 'not empty' : 'empty';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
