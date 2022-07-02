// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_list_002.phpt
  it("foreach with freak lists", function () {
    expect(parser.parseCode("<?php\nforeach (array(array(1,2), array(3,4)) as list($a, )) {\n    var_dump($a);\n}\n$array = [['a', 'b'], 'c', 'd'];\nforeach($array as list(, $a)) {\n   var_dump($a);\n}\n?>")).toMatchSnapshot();
  });
});
