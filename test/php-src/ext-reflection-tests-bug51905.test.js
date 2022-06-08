// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug51905.phpt
  it("Bug #51905 (ReflectionParameter fails if default value is an array with an access to self::)", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n    const Y = 20;\n}\nclass Foo extends Bar {\n    const X = 12;\n    public function x($x = 1, $y = array(self::X), $z = parent::Y) {}\n}\n$clazz = new ReflectionClass('Foo');\n$method = $clazz->getMethod('x');\nforeach ($method->getParameters() as $param) {\n    if ( $param->isDefaultValueAvailable())\n        echo '$', $param->getName(), ' : ', var_export($param->getDefaultValue(), 1), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
