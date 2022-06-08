// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_FileInfo_basic.phpt
  it("ReflectionObject::getFileName(), ReflectionObject::getStartLine(), ReflectionObject::getEndLine() - basic function", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionObject(new C);\nvar_dump($rc->getFileName());\nvar_dump($rc->getStartLine());\nvar_dump($rc->getEndLine());\n$rc = new ReflectionObject(new stdclass);\nvar_dump($rc->getFileName());\nvar_dump($rc->getStartLine());\nvar_dump($rc->getEndLine());\nClass C {\n}\n?>")).toMatchSnapshot();
  });
});
