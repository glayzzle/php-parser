// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation7.phpt
  it("Test array_map() function : usage variations - arrays of different size", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing array having different size\n *   1) first array as empty array\n *   2) second array as empty array\n *   3) second array shorter than first array\n *   4) first array shorter than second array\n *   5) one more array than callback function arguments\n */\necho \"*** Testing array_map() : arrays with diff. size ***\\n\";\nfunction callback($a, $b)\n{\n  return array($a => $b);\n}\n// calling array_map with different arrays\nvar_dump( array_map('callback', array(1, 2, 3), array()) );\nvar_dump( array_map('callback', array(), array('a', 'b', 'c')) );\nvar_dump( array_map('callback', array(1, 2, 3), array('a', 'b')) );\nvar_dump( array_map('callback', array(012, 0x2F, 0X1A), array(2.3, 12.4e2)) );\nvar_dump( array_map('callback', array(), array(1, 2, 3), array('a', 'b')) );  // passing more no. of arrays than callback function argument\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
