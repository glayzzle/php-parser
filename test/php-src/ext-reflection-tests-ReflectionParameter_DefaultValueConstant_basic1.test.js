// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_DefaultValueConstant_basic1.phpt
  it("ReflectionParameter::isDefaultValueConstant() && getDefaultValueConstantName()", function () {
    expect(parser.parseCode("<?php\ndefine(\"CONST_TEST_1\", \"const1\");\nfunction ReflectionParameterTest($test1=array(), $test2 = CONST_TEST_1, $test3 = CASE_LOWER) {\n    echo $test;\n}\n$reflect = new ReflectionFunction('ReflectionParameterTest');\nforeach($reflect->getParameters() as $param) {\n    if($param->getName() == 'test1') {\n        var_dump(@$param->isDefaultValueConstant());\n    }\n    if($param->getName() == 'test2') {\n        var_dump(@$param->isDefaultValueConstant());\n    }\n    if($param->isDefaultValueAvailable() && @$param->isDefaultValueConstant()) {\n        var_dump(@$param->getDefaultValueConstantName());\n    }\n}\nclass Foo2 {\n    const bar = 'Foo2::bar';\n}\nclass Foo {\n    const bar = 'Foo::bar';\n    public function baz($param1 = self::bar, $param2=Foo2::bar, $param3=CONST_TEST_1) {\n    }\n}\n$method = new ReflectionMethod('Foo', 'baz');\n$params = $method->getParameters();\nforeach ($params as $param) {\n    if (@$param->isDefaultValueConstant()) {\n        var_dump(@$param->getDefaultValueConstantName());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
