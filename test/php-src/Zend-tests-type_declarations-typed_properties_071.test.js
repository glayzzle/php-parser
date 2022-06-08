// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_071.phpt
  it("Test assignment to typed reference with weak type conversion", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $x = \"x\";\n}\n$test = new Test;\nvar_dump($test);\n$y = \"y\";\n$test->x = &$y;\nvar_dump($y, $test);\n$z = 42;\n$y = $z;\nvar_dump($y, $z, $test);\n?>")).toMatchSnapshot();
  });
});
