// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/internal_parameter_default_value/ReflectionParameter_toString_Internal.phpt
  it("ReflectionParameter::__toString() should display default values for internal functions as well", function () {
    expect(parser.parseCode("<?php\n$class = new ReflectionClass('DateTime');\n$method = $class->getMethod('setTime');\nforeach ($method->getParameters() as $k => $parameter) {\n    echo $parameter . \"\\n\";\n}\necho \"----------\\n\";\n$class = new ReflectionClass('DateTimeZone');\n$method = $class->getMethod('listIdentifiers');\nforeach ($method->getParameters() as $parameter) {\n    echo $parameter . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
