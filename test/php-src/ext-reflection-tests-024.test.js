// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/024.phpt
  it("ReflectionObject::__toString (filtering privates/protected dynamic properties)", function () {
    expect(parser.parseCode("<?php\nclass C1 {\n    private   $p1 = 1;\n    protected $p2 = 2;\n    public    $p3 = 3;\n}\n$x = new C1();\n$x->z = 4;\n$x->p3 = 5;\n$obj = new ReflectionObject($x);\necho $obj;\n?>")).toMatchSnapshot();
  });
});
