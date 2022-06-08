// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_FileInfo_basic.phpt
  it("ReflectionClass::getFileName(), ReflectionClass::getStartLine(), ReflectionClass::getEndLine()", function () {
    expect(parser.parseCode("<?php\n//New instance of class C - defined below\n$rc = new ReflectionClass(\"C\");\n//Get the file name of the PHP script in which C is defined\nvar_dump($rc->getFileName());\n//Get the line number at the start of the definition of class C\nvar_dump($rc->getStartLine());\n//Get the line number at the end of the definition of class C\nvar_dump($rc->getEndLine());\n//Same tests as above but stdclass is internal - so all results should be false.\n$rc = new ReflectionClass(\"stdClass\");\nvar_dump($rc->getFileName());\nvar_dump($rc->getStartLine());\nvar_dump($rc->getEndLine());\nClass C {\n}\n?>")).toMatchSnapshot();
  });
});
