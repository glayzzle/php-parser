// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug37816.phpt
  it("Bug #37816 (ReflectionProperty does not throw exception when accessing protected attribute)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    protected $p = 2;\n}\n$o = new TestClass;\n$r = new ReflectionProperty($o, 'p');\nvar_dump($r->getValue($o));\n?>")).toMatchSnapshot();
  });
});
