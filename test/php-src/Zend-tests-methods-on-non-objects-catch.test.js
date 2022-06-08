// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/methods-on-non-objects-catch.phpt
  it("Catch method calls on non-objects raise recoverable errors", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $message) {\n  var_dump($code, $message);\n});\n$x= null;\ntry {\n    var_dump($x->method());\n} catch (Error $e) {\n  var_dump($e->getCode(), $e->getMessage());\n}\necho \"Alive\\n\";\n?>")).toMatchSnapshot();
  });
});
