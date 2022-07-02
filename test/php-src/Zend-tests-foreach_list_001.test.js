// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_list_001.phpt
  it("foreach with list syntax", function () {
    expect(parser.parseCode("<?php\nforeach(array(array(1,2), array(3,4)) as list($a, $b)) {\n    var_dump($a . $b);\n}\n$array = array(\n    array('a', 'b'),\n    array('c', 'd'),\n);\nforeach ($array as list($a, $b)) {\n    var_dump($a . $b);\n}\n$multi = array(\n    array(array(1,2), array(3,4)),\n    array(array(5,6), array(7,8)),\n);\nforeach ($multi as list(list($a, $b), list($c, $d))) {\n    var_dump($a . $b . $c . $d);\n}\nforeach ($multi as $key => list(list($a, $b), list($c, $d))) {\n    var_dump($key . $a . $b . $c . $d);\n}\n?>")).toMatchSnapshot();
  });
});
