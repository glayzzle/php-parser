// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/intersection_types.phpt
  it("Intersection types in reflection", function () {
    expect(parser.parseCode("<?php\nfunction dumpType(ReflectionIntersectionType $rt) {\n    echo \"Type $rt:\\n\";\n    echo \"Allows null: \" . json_encode($rt->allowsNull()) . \"\\n\";\n    foreach ($rt->getTypes() as $type) {\n        echo \"  Name: \" . $type->getName() . \"\\n\";\n        echo \"  String: \" . (string) $type . \"\\n\";\n        echo \"  Allows Null: \" . json_encode($type->allowsNull()) . \"\\n\";\n    }\n}\nfunction test1(): X&Y&Z&Traversable&Countable { }\nclass Test {\n    public X&Y&Countable $prop;\n}\ndumpType((new ReflectionFunction('test1'))->getReturnType());\n$rc = new ReflectionClass(Test::class);\n$rp = $rc->getProperty('prop');\ndumpType($rp->getType());\n/* Force CE resolution of the property type */\ninterface y {}\nclass x implements Y, Countable {\n    public function count(): int { return 0; }\n}\n$test = new Test;\n$test->prop = new x;\n$rp = $rc->getProperty('prop');\ndumpType($rp->getType());\n?>")).toMatchSnapshot();
  });
});
