// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug45826.phpt
  it("ArrayObject/ArrayIterator : serialization", function () {
    expect(parser.parseCode("<?php\n$o = new ArrayObject();\n$y = new StdClass;\n$o->append($y);\n$o->append($y);\n$o->append($o);\nvar_dump($o[0] === $o[1]);\nvar_dump($o[2] === $o);\n$s1 = serialize($o);\n$s2 = $o->serialize();\nvar_dump($s1);\nvar_dump($s2);\n$o1 = unserialize($s1);\nvar_dump($o1[0] === $o1[1]);\nvar_dump($o1[2] === $o1);\n$o2 = new ArrayObject();\n$o2->unserialize($s2);\nvar_dump($o2[0] === $o2[1]);\nvar_dump($o2[2] !== $o2);\nvar_dump($o2[2][2] === $o2[2]);\necho \"#### Extending ArrayObject\\n\";\nunset($o,$x,$s1,$s2,$o1,$o2);\nclass ArrayObject2 extends ArrayObject {\n    public function __serialize(): array {\n        return parent::__serialize();\n    }\n    public function __unserialize($s): void {\n        parent::__unserialize($s);\n    }\n}\n$o = new ArrayObject2();\n$y = new StdClass;\n$o->append($y);\n$o->append($y);\n$o->append($o);\nvar_dump($o[0] === $o[1]);\nvar_dump($o[2] === $o);\n$s1 = serialize($o);\n$s2 = $o->__serialize();\nvar_dump($s1);\nvar_dump($s2);\n$o1 = unserialize($s1);\nvar_dump($o1[0] === $o1[1]);\nvar_dump($o1[2] === $o1);\n$o2 = new ArrayObject2();\n$o2->__unserialize($s2);\nvar_dump($o2[0] === $o2[1]);\nvar_dump($o2[2] !== $o2);\nvar_dump($o2[2][2] === $o2[2]);\n?>")).toMatchSnapshot();
  });
});
