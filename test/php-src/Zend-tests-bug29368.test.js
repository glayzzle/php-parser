// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29368.phpt
  it("Bug #29368 (The destructor is called when an exception is thrown from the constructor)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"\\n\";\n        throw new Exception;\n    }\n    function __destruct()\n    {\n        echo __METHOD__ . \"\\n\";\n    }\n}\ntry\n{\n    $bar = new Foo;\n} catch(Exception $exc)\n{\n    echo \"Caught exception!\\n\";\n}\nunset($bar);\n?>")).toMatchSnapshot();
  });
});
