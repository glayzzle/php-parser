// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/gh8080.phpt
  it("GH-8080 (ReflectionClass::getConstants() depends on def. order)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const LIST = [\n        self::TEST => 'Test',\n    ];\n    private const TEST = 'test';\n}\nclass B extends A {}\n$r = new ReflectionClass(B::class);\nvar_dump(\n    $r->getConstants(),\n    $r->getConstant(\"LIST\")\n);\n?>")).toMatchSnapshot();
  });
});
