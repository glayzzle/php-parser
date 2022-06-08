// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29368_3.phpt
  it("Bug #29368.3 (The destructor is called when an exception is thrown from the constructor).", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __construct() {\n        echo __METHOD__ . \"\\n\";\n    }\n    function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass Bar {\n    function __construct() {\n        echo __METHOD__ . \"\\n\";\n        throw new Exception;\n    }\n    function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\ntry {\n    new Foo() + new Bar();\n} catch(Exception $exc) {\n    echo \"Caught exception!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
