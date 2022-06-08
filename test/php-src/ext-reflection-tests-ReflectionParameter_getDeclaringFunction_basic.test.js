// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_getDeclaringFunction_basic.phpt
  it("ReflectionParameter::getDeclaringFunction()", function () {
    expect(parser.parseCode("<?php\nfunction ReflectionParameterTest($test, $test2 = null) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\n$params = $reflect->getParameters();\nforeach($params as $key => $value) {\n    echo $value->getDeclaringFunction() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
