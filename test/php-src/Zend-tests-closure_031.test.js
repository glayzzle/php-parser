// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_031.phpt
  it("Closure 031: Closure properties with custom error handlers", function () {
    expect(parser.parseCode("<?php\nfunction foo($errno, $errstr, $errfile, $errline) {\n    echo \"Warning: $errstr\\n\";\n}\nset_error_handler('foo');\n$foo = function() {\n};\ntry {\n    var_dump($foo->a);\n} catch (Error $ex) {\n    echo \"Error: {$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
