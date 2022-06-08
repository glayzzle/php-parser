// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug78774.phpt
  it("Bug #78774: ReflectionNamedType on Typed Properties Crash", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public stdClass $prop;\n    public stdClass|Foo $prop2;\n}\n$rc = new ReflectionClass(Test::class);\n$rp = $rc->getProperty('prop');\n$rt = $rp->getType();\n$rp2 = $rc->getProperty('prop2');\n$rt2 = $rp2->getType();\n// Force a resolution of the property type\n$test = new Test;\n$test->prop = new stdClass;\n$test->prop2 = new stdClass;\nvar_dump($rt->getName());\nvar_dump((string) $rt2);\n?>")).toMatchSnapshot();
  });
});
