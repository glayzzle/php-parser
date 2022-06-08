// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug62715.phpt
  it("Bug #62715 (ReflectionParameter::isDefaultValueAvailable() wrong result)", function () {
    expect(parser.parseCode("<?php\nfunction test(PDO $a = null, $b = 0, array $c) {}\n$r = new ReflectionFunction('test');\nforeach ($r->getParameters() as $p) {\n    var_dump($p->isDefaultValueAvailable());\n}\nforeach ($r->getParameters() as $p) {\n    if ($p->isDefaultValueAvailable()) {\n        var_dump($p->getDefaultValue());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
