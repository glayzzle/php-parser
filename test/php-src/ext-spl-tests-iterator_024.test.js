// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_024.phpt
  it("SPL: RecursiveIteratorIterator with custom iterator class", function () {
    expect(parser.parseCode("<?php\n$ar = array(1, 2, array(31, 32, array(331)), 4);\nforeach(new RecursiveIteratorIterator(new ArrayObject($ar, 0, \"RecursiveArrayIterator\")) as $v) echo \"$v\\n\";\n$it = new ArrayObject($ar);\nvar_dump($it->getIteratorClass());\ntry\n{\n    foreach(new RecursiveIteratorIterator(new ArrayObject($ar)) as $v) echo \"$v\\n\";\n}\ncatch (InvalidArgumentException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\necho \"===MANUAL===\\n\";\n$it->setIteratorClass(\"RecursiveArrayIterator\");\nvar_dump($it->getIteratorClass());\nforeach(new RecursiveIteratorIterator($it) as $v) echo \"$v\\n\";\n?>")).toMatchSnapshot();
  });
});
