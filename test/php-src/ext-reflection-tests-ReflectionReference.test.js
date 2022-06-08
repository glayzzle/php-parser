// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionReference.phpt
  it("Basic ReflectionReference functionality", function () {
    expect(parser.parseCode("<?php\n$ary = [0, 1, 2, 3];\n$ref1 =& $ary[1];\nunset($ref1);\n$ref2 =& $ary[2];\n$ref3 =& $ary[3];\necho \"fromArrayElement():\\n\";\n$r0 = ReflectionReference::fromArrayElement($ary, 0);\nvar_dump($r0 === null);\n$r1 = ReflectionReference::fromArrayElement($ary, 1);\nvar_dump($r1 === null);\n$r2 = ReflectionReference::fromArrayElement($ary, 2);\nvar_dump($r2 instanceof ReflectionReference);\n$r3 = ReflectionReference::fromArrayElement($ary, 3);\nvar_dump($r2 instanceof ReflectionReference);\necho \"getId() #1:\\n\";\nvar_dump($r2->getId() === $r2->getId());\nvar_dump($r3->getId() === $r3->getId());\nvar_dump($r2->getId() !== $r3->getId());\necho \"getId() #2:\\n\";\n$ary2 = [&$ary[2], &$ref3];\n$r2_2 = ReflectionReference::fromArrayElement($ary2, 0);\n$r3_2 = ReflectionReference::fromArrayElement($ary2, 1);\nvar_dump($r2->getId() === $r2_2->getId());\nvar_dump($r3->getId() === $r3_2->getId());\necho \"getId() #3:\\n\";\n$r2_id = $r2->getId();\n$r3_id = $r3->getId();\nunset($r0, $r1, $r2, $r3, $r2_2, $r3_2);\n$r2 = ReflectionReference::fromArrayElement($ary, 2);\n$r3 = ReflectionReference::fromArrayElement($ary, 3);\nvar_dump($r2_id === $r2->getId());\nvar_dump($r3_id === $r3->getId());\n?>")).toMatchSnapshot();
  });
});
