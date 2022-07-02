// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug42177.phpt
  it("Bug #42177 (Warning \"array_merge_recursive(): recursion detected\" comes again...)", function () {
    expect(parser.parseCode("<?php\n$a1 = array( 'key1' => 1, 'key3' => 2 );\n$a2 = array();\n$a1 = array_merge_recursive( $a1, $a2 );\n$a1 = array_merge_recursive( $a1, $a2 );\nunset( $a1, $a2 );\n$a1 = array();\n$a2 = array( 'key1' => 1, 'key3' => 2 );\n$a1 = array_merge_recursive( $a1, $a2 );\n$a1 = array_merge_recursive( $a1, $a2 );\nunset( $a1, $a2 );\n$a1 = array();\n$a2 = array( 'key1' => &$a1 );\n$a1 = array_merge_recursive( $a1, $a2 );\ntry {\n    $a1 = array_merge_recursive( $a1, $a2 );\n} catch (\\Error $e) {\n    echo $e->getMessage() . \" on line \" . $e->getLine() . \"\\n\";\n}\nunset( $a1, $a2 );\n$x = 'foo';\n$y =& $x;\n$a1 = array($x, $y, $x, $y);\n$a2 = array( 'key1' => $a1, $x, $y );\n$a1 = array_merge_recursive( $a1, $a2 );\n$a1 = array_merge_recursive( $a1, $a2 );\nunset( $a1, $a2 );\n?>")).toMatchSnapshot();
  });
});
