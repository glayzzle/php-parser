// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug40431.phpt
  it("Bug #40431 (dynamic properties may cause crash in ReflectionProperty methods)", function () {
    expect(parser.parseCode("<?php\necho \"=== 1st test ===\\n\";\n$Obj = new stdClass;\n$Obj->value = 'value';\n$RefObj = new ReflectionObject($Obj);\n$props = $RefObj->getProperties();\nvar_dump($props);\nvar_dump($props[0]->isStatic());\nvar_dump($props[0]->isPrivate());\nvar_dump($props[0]->isPublic());\nvar_dump($props[0]->isProtected());\necho \"=== 2nd test ===\\n\";\nclass test1 {\n}\nclass test2 extends test1{\n}\n$Obj = new test2;\n$Obj->value = 'value';\n$RefObj = new ReflectionObject($Obj);\n$props = $RefObj->getProperties();\nvar_dump($props);\nvar_dump($props[0]->isStatic());\nvar_dump($props[0]->isPrivate());\nvar_dump($props[0]->isPublic());\nvar_dump($props[0]->isProtected());\necho \"=== 3rd test ===\\n\";\nclass test3 {\n}\n$Obj = new test3;\n$Obj->value = 'value';\n$RefObj = new ReflectionObject($Obj);\n$props = $RefObj->getProperties();\nvar_dump($props);\nvar_dump($props[0]->isStatic());\nvar_dump($props[0]->isPrivate());\nvar_dump($props[0]->isPublic());\nvar_dump($props[0]->isProtected());\necho \"=== 4th test ===\\n\";\nclass test5 {\n    private $value = 1;\n}\nclass test4 extends test5{\n}\n$Obj = new test4;\n$Obj->value = 'value';\n$RefObj = new ReflectionObject($Obj);\n$props = $RefObj->getProperties();\nvar_dump($props);\nvar_dump($props[0]->isStatic());\nvar_dump($props[0]->isPrivate());\nvar_dump($props[0]->isPublic());\nvar_dump($props[0]->isProtected());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
