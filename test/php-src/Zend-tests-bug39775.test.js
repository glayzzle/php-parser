// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39775.phpt
  it("Bug #39775 (\"Indirect modification ...\" message is not shown)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    var $array = array();\n    function __get($var) {\n        $v =& $this->array;\n        return $this->array;\n    }\n}\n$t = new test;\n$t->anything[] = 'bar';\nprint_r($t->anything);\n?>")).toMatchSnapshot();
  });
});
