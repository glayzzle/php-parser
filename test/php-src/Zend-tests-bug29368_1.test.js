// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29368_1.phpt
  it("Bug #29368.1 (The destructor is called when an exception is thrown from the constructor).", function () {
    expect(parser.parseCode("<?php\nfunction throwme($arg)\n{\n    throw new Exception;\n}\nclass foo {\n  function __construct() {\n    echo \"Inside constructor\\n\";\n    throwme($this);\n  }\n  function __destruct() {\n    echo \"Inside destructor\\n\";\n  }\n}\ntry {\n  $bar = new foo;\n} catch(Exception $exc) {\n  echo \"Caught exception!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
