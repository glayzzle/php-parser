// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_004.phpt
  it("ZE2 Late Static Binding testing get_called_class()", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public static function getClassName() {\n        return get_called_class();\n    }\n}\nclass ChildClass extends TestClass {}\necho TestClass::getClassName() . \"\\n\";\necho ChildClass::getClassName() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
