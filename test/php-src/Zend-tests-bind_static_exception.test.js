// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bind_static_exception.phpt
  it("BIND_STATIC may destroy a variable with a throwing destructor", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function __destruct() {\n        throw new Exception(\"Foo\");\n    }\n}\ntry {\n    $new = new Test;\n    static $new;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
