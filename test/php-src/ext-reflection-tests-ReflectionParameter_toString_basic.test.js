// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_toString_basic.phpt
  it("ReflectionParameter::__toString()", function () {
    expect(parser.parseCode("<?php\nfunction ReflectionParameterTest($test, $test2 = null, ...$test3) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\n$params = $reflect->getParameters();\nforeach($params as $key => $value) {\n    echo $value->__toString() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
