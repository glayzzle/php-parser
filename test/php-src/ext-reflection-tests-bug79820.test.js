// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug79820.phpt
  it("Bug #79820: Use after free when type duplicated into ReflectionProperty gets resolved", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public stdClass $prop;\n}\n$rp = new ReflectionProperty(Test::class, 'prop');\n$test = new Test;\n$test->prop = new stdClass;\nvar_dump($rp->getType()->getName());\n$test->dynProp = 42;\n$rp = new ReflectionProperty($test, 'dynProp');\nvar_dump($rp->getType());\n?>")).toMatchSnapshot();
  });
});
