// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/internal_parameter_default_value/ReflectionParameter_getDefaultValueConstantName_Internal.phpt
  it("ReflectionParameter::getDefaultValueConstantName() should also work for parameters of internal functions.", function () {
    expect(parser.parseCode("<?php\n$class = new ReflectionClass('DateTime');\n$method = $class->getMethod('setTime');\nforeach ($method->getParameters() as $parameter) {\n    try {\n        var_dump($parameter->getDefaultValueConstantName());\n    } catch (ReflectionException $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\necho \"----------\\n\";\n$class = new ReflectionClass('DateTimeZone');\n$method = $class->getMethod('getTransitions');\nforeach ($method->getParameters() as $parameter) {\n    try {\n        var_dump($parameter->getDefaultValueConstantName());\n    } catch (ReflectionException $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\necho \"----------\\n\";\n$class = new ReflectionClass('DateTimeZone');\n$method = $class->getMethod('listIdentifiers');\nforeach ($method->getParameters() as $parameter) {\n    try {\n        var_dump($parameter->getDefaultValueConstantName());\n    } catch (ReflectionException $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
