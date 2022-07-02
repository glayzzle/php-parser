// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_failure.phpt
  it("ZE2 Do not call destructors if constructor fails", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    function __construct($msg) {\n        echo __METHOD__ . \"($msg)\\n\";\n        throw new Exception($msg);\n    }\n    function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\ntry\n{\n    $o = new Test('Hello');\n    unset($o);\n}\ncatch (Exception $e)\n{\n    echo 'Caught ' . get_class($e) . '(' . $e->getMessage() . \")\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
