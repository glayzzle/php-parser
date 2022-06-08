// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug80821.phpt
  it("Bug #80821: ReflectionProperty::getDefaultValue() returns current value for statics", function () {
    expect(parser.parseCode("<?php\nclass Statics {\n\tpublic static $staticVar = 1;\n}\nStatics::$staticVar = 2;\n$reflect = new \\ReflectionClass(Statics::class);\n$prop = $reflect->getProperty(\"staticVar\");\nvar_dump($prop->getDefaultValue());\n?>")).toMatchSnapshot();
  });
});
