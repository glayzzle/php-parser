// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_export_basic.phpt
  it("ReflectionParameter::__toString()", function () {
    expect(parser.parseCode("<?php\nfunction ReflectionParameterTest($test, $test2 = null) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\nforeach($reflect->getParameters() as $key => $value) {\n    echo new ReflectionParameter('ReflectionParameterTest', $key), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
