// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ErrorException_construct.phpt
  it("Test default value handling of ErrorException::__construct()", function () {
    expect(parser.parseCode("<?php\n$e = new ErrorException();\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Second\", 0, E_ERROR, null);\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Third\", 0, E_ERROR, null, null);\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Forth\", 0, E_ERROR, null, 123);\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Fifth\", 0, E_ERROR, \"abc.php\");\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Sixth\", 0, E_ERROR, \"abc.php\", null);\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n$e = new ErrorException(\"Seventh\", 0, E_ERROR, \"abc.php\", 123);\nvar_dump($e->getMessage());\nvar_dump($e->getFile());\nvar_dump($e->getLine());\n?>")).toMatchSnapshot();
  });
});
