// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/023.phpt
  it("ReflectionClass::getDefaultProperties (filtering parent privates)", function () {
    expect(parser.parseCode("<?php\nclass C1 {\n    private   $p1 = 1;\n    protected $p2 = 2;\n    public    $p3 = 3;\n}\nclass C2 extends C1 {\n    private   $p4 = 4;\n    protected $p5 = 5;\n    public    $p6 = 6;\n}\n$class = new ReflectionClass(\"C2\");\nvar_dump($class->getDefaultProperties());\n?>")).toMatchSnapshot();
  });
});
