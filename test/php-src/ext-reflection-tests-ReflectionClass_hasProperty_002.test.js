// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasProperty_002.phpt
  it("ReflectionClass::hasProperty() - error cases", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a;\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\nvar_dump($rc->hasProperty(1));\nvar_dump($rc->hasProperty(1.5));\nvar_dump($rc->hasProperty(true));\n?>")).toMatchSnapshot();
  });
});
