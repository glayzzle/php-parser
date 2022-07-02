// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_004.phpt
  it("Catching an exception in a constructor inside a static method", function () {
    expect(parser.parseCode("<?php\nclass MyObject\n{\n    function fail()\n    {\n        throw new Exception();\n    }\n    function __construct()\n    {\n        self::fail();\n        echo __METHOD__ . \"() Must not be reached\\n\";\n    }\n    function __destruct()\n    {\n        echo __METHOD__ . \"() Must not be called\\n\";\n    }\n    static function test()\n    {\n        try\n        {\n            new MyObject();\n        }\n        catch(Exception $e)\n        {\n            echo \"Caught\\n\";\n        }\n    }\n}\nMyObject::test();\n?>")).toMatchSnapshot();
  });
});
