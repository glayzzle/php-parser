// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_DefaultValueConstant_error.phpt
  it("ReflectionParameter::getDefaultValueConstant() should raise exception on non optional parameter", function () {
    expect(parser.parseCode("<?php\ndefine(\"CONST_TEST_1\", \"const1\");\nfunction ReflectionParameterTest($test, $test2 = CONST_TEST_1) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\nforeach($reflect->getParameters() as $param) {\n    try {\n        echo $param->getDefaultValueConstantName() . \"\\n\";\n    } catch(ReflectionException $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
