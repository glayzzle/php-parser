// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_016.phpt
  it("Exceptions on improper usage of $this", function () {
    expect(parser.parseCode("<?php\ntry {\n    $this->foo();\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\n$this->foo();\n?>")).toMatchSnapshot();
  });
});
