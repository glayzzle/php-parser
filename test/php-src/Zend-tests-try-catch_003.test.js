// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_003.phpt
  it("Catching an exception in a constructor fired form a static method", function () {
    expect(parser.parseCode("<?php\nclass MyObject\n{\n    function fail()\n    {\n        throw new Exception();\n    }\n    function __construct()\n    {\n        self::fail();\n        echo __METHOD__ . \"() Must not be reached\\n\";\n    }\n    function __destruct()\n    {\n        echo __METHOD__ . \"() Must not be called\\n\";\n    }\n}\ntry\n{\n    new MyObject();\n}\ncatch(Exception $e)\n{\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
