// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_DefaultValueConstant_basic2.phpt
  it("ReflectionParameter::isDefaultValueConstant() && getDefaultValueConstantName() for namespace", function () {
    expect(parser.parseCode("<?php\nnamespace ReflectionTestNamespace {\n    CONST TEST_CONST_1 = \"Test Const 1\";\n    class TestClass {\n        const TEST_CONST_2 = \"Test Const 2 in class\";\n    }\n}\nnamespace {\n    function ReflectionParameterTest($test=ReflectionTestNamespace\\TestClass::TEST_CONST_2, $test2 = ReflectionTestNamespace\\CONST_TEST_1) {\n        echo $test;\n    }\n    $reflect = new ReflectionFunction('ReflectionParameterTest');\n    foreach($reflect->getParameters() as $param) {\n        if($param->isDefaultValueAvailable() && @$param->isDefaultValueConstant()) {\n            echo @$param->getDefaultValueConstantName() . \"\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
