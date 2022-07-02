// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46106.phpt
  it("Bug #46106 (Memory leaks when using global statement)", function () {
    expect(parser.parseCode("<?php\n$foo = array(1);\nfunction foobar($errno, $errstr, $errfile, $errline) { }\nset_error_handler('foobar');\nfunction test($x) {\n    global $foo;\n    $x->invokeArgs(array(0));\n}\n$x = new ReflectionFunction('str_pad');\ntry {\n    test($x);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
