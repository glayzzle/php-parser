// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug51911.phpt
  it("Bug #51911 (ReflectionParameter::getDefaultValue() memory leaks with constant array)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n   const X = 1;\n   public function x($x = array(1)) {}\n}\n$clazz = new ReflectionClass('Foo');\n$method = $clazz->getMethod('x');\nforeach ($method->getParameters() as $param) {\n    if ( $param->isDefaultValueAvailable())\n        echo '$', $param->getName(), ' : ', var_export($param->getDefaultValue(), 1), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
