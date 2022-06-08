// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_export_basic3.phpt
  it("ReflectionObject::__toString() - ensure dynamic property with same name as inherited private property is shown.", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $p = 1;\n}\nclass D extends C{\n}\n$Obj = new D;\n$Obj->p = 'value';\necho new ReflectionObject($Obj);\n?>")).toMatchSnapshot();
  });
});
