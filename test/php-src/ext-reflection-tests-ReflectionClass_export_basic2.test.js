// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_export_basic2.phpt
  it("ReflectionClass::__toString() - ensure inherited private props are hidden.", function () {
    expect(parser.parseCode("<?php\nClass c {\n    private $a;\n    static private $b;\n    public ?int $c = 42;\n    public Foo $d;\n}\nclass d extends c {}\necho new ReflectionClass(\"c\"), \"\\n\";\necho new ReflectionClass(\"d\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
