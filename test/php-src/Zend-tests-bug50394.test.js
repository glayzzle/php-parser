// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50394.phpt
  it("Bug #50394: Reference argument converted to value in __call", function () {
    expect(parser.parseCode("<?php\nfunction inc( &$x ) { $x++; }\nclass Proxy {\n        function __call( $name, $args ) {\n        echo \"$name called!\\n\";\n                call_user_func_array( 'inc', $args );\n        }\n}\n$arg = 1;\n$args = array( &$arg );\n$proxy = new Proxy;\ncall_user_func_array( array( $proxy, 'bar' ), $args );\ncall_user_func_array( array( $proxy, 'bar' ), array(&$arg) );\nvar_dump($arg);\n?>")).toMatchSnapshot();
  });
});
