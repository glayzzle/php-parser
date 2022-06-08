// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug31926.phpt
  it("Bug #31926 (php in free() error with RecursiveArrayIterator)", function () {
    expect(parser.parseCode("<?php\n$array = array(0 => array('world'));\n$it = new RecursiveIteratorIterator(new RecursiveArrayIterator($array));\nforeach($it as $key => $val) {\n   var_dump($key, $val);\n}\n?>")).toMatchSnapshot();
  });
});
