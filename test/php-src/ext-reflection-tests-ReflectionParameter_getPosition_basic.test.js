// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_getPosition_basic.phpt
  it("ReflectionParameter::getPosition()", function () {
    expect(parser.parseCode("<?php\nfunction ReflectionParameterTest($test, $test2 = null) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\n$params = $reflect->getParameters();\nforeach($params as $key => $value) {\n    var_dump($value->getPosition());\n}\n?>")).toMatchSnapshot();
  });
});
