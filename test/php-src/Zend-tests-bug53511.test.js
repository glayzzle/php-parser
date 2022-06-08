// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53511.phpt
  it("Bug #53511 (Exceptions are lost in case an exception is thrown in catch operator)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __destruct() {\n        throw new Exception(\"ops 1\");\n    }\n}\nfunction test() {\n    $e = new Foo();\n    try {\n        throw new Exception(\"ops 2\");\n    } catch (Exception $e) {\n        echo $e->getMessage().\"\\n\";\n    }\n}\ntest();\necho \"bug\\n\";\n?>")).toMatchSnapshot();
  });
});
