// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasConstant_001.phpt
  it("ReflectionClass::hasConstant()", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const myConst = 1;\n}\nclass D extends C {\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check existing constant: \";\nvar_dump($rc->hasConstant(\"myConst\"));\necho \"Check existing constant, different case: \";\nvar_dump($rc->hasConstant(\"MyCoNsT\"));\necho \"Check absent constant: \";\nvar_dump($rc->hasConstant(\"doesNotExist\"));\n$rd = new ReflectionClass(\"D\");\necho \"Check inherited constant: \";\nvar_dump($rd->hasConstant(\"myConst\"));\necho \"Check absent constant: \";\nvar_dump($rd->hasConstant(\"doesNotExist\"));\n?>")).toMatchSnapshot();
  });
});
