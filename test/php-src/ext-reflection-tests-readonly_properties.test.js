// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/readonly_properties.phpt
  it("Readonly property reflection", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $rw;\n    public readonly int $ro;\n}\n$rp = new ReflectionProperty(Test::class, 'rw');\nvar_dump($rp->isReadOnly());\nvar_dump(($rp->getModifiers() & ReflectionProperty::IS_READONLY) != 0);\n$rp = new ReflectionProperty(Test::class, 'ro');\nvar_dump($rp->isReadOnly());\nvar_dump(($rp->getModifiers() & ReflectionProperty::IS_READONLY) != 0);\n$rp = new ReflectionProperty(Test::class, 'ro');\necho $rp;\n?>")).toMatchSnapshot();
  });
});
