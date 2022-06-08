// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69989_3.phpt
  it("Generator cycle collection edge cases", function () {
    expect(parser.parseCode("<?php\n// Extra args\nfunction gen1() {\n    yield;\n}\n$obj = new stdClass;\n$obj->gen = gen1($obj);\n// Symtable\nfunction gen2() {\n    $varName = 'a';\n    $$varName = yield;\n    yield;\n}\n$gen = gen2();\n$gen->send($gen);\n// Symtable indirect\nfunction gen3() {\n    $varName = 'a';\n    $$varName = 42;\n    $var = yield;\n    yield;\n}\n$gen = gen3();\n$gen->send($gen);\n// Yield from root\nfunction gen4() {\n    yield from yield;\n}\n$gen = gen4();\n$gen2 = gen4($gen);\n$gen2->send([1, 2, 3]);\n$gen->send($gen2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
