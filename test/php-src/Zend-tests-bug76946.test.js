// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76946.phpt
  it("Bug #76946: Cyclic reference in generator not detected", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $gen = yield;\n    foreach ([1, $gen] as $v) {\n        yield $v;\n    }\n}\nfunction gen2() {\n    $gen = yield;\n    $gen + yield;\n}\n$gen = gen();\n$gen->send($gen);\n$gen2 = gen2();\n$gen2->send($gen2);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
