// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_002.phpt
  it("Creating recursive array on foreach using same variable", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nforeach (($a = array('a' => array('a' => &$a))) as $a) {\n    var_dump($a);\n}\n?>")).toMatchSnapshot();
  });
});
