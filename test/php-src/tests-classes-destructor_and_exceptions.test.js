// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_and_exceptions.phpt
  it("ZE2 catch exception thrown in destructor", function () {
    expect(parser.parseCode("<?php\nclass FailClass\n{\n    public $fatal;\n    function __destruct()\n    {\n        echo __METHOD__ . \"\\n\";\n        throw new exception(\"FailClass\");\n        echo \"Done: \" . __METHOD__ . \"\\n\";\n    }\n}\ntry\n{\n    $a = new FailClass;\n    unset($a);\n}\ncatch(Exception $e)\n{\n    echo \"Caught: \" . $e->getMessage() . \"\\n\";\n}\nclass FatalException extends Exception\n{\n    function __construct($what)\n    {\n        echo __METHOD__ . \"\\n\";\n        $o = new FailClass;\n        unset($o);\n        echo \"Done: \" . __METHOD__ . \"\\n\";\n    }\n}\ntry\n{\n    throw new FatalException(\"Damn\");\n}\ncatch(Exception $e)\n{\n    echo \"Caught Exception: \" . $e->getMessage() . \"\\n\";\n}\ncatch(FatalException $e)\n{\n    echo \"Caught FatalException: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
