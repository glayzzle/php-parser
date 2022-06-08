// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/union_types.phpt
  it("Union types in reflection", function () {
    expect(parser.parseCode("<?php\nfunction dumpType(ReflectionUnionType $rt) {\n    echo \"Type $rt:\\n\";\n    echo \"Allows null: \" . ($rt->allowsNull() ? \"true\" : \"false\") . \"\\n\";\n    foreach ($rt->getTypes() as $type) {\n        echo \"  Name: \" . $type->getName() . \"\\n\";\n        echo \"  String: \" . (string) $type . \"\\n\";\n        echo \"  Allows Null: \" . ($type->allowsNull() ? \"true\" : \"false\") . \"\\n\";\n    }\n}\nfunction test1(): X|Y|int|float|false|null { }\nfunction test2(): X|iterable|bool { }\nclass Test {\n    public X|Y|int $prop;\n}\ndumpType((new ReflectionFunction('test1'))->getReturnType());\ndumpType((new ReflectionFunction('test2'))->getReturnType());\n$rc = new ReflectionClass(Test::class);\n$rp = $rc->getProperty('prop');\ndumpType($rp->getType());\n/* Force CE resolution of the property type */\nclass x {}\n$test = new Test;\n$test->prop = new x;\n$rp = $rc->getProperty('prop');\ndumpType($rp->getType());\nclass y {}\n$test->prop = new y;\n$rp = $rc->getProperty('prop');\ndumpType($rp->getType());\n?>")).toMatchSnapshot();
  });
});
