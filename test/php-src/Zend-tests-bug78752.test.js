// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78752.phpt
  it("Bug #78752: Segfault if GC triggered while generator stack frame is being destroyed", function () {
    expect(parser.parseCode("<?php\nfunction gen(&$gen) {\n    $a = new stdClass;\n    $a->a = $a;\n    $b = new stdClass;\n    $b->b = $b;\n    yield 1;\n}\n$gen = gen($gen);\nvar_dump($gen->current());\nfor ($i = 0; $i < 9999; $i++) {\n    $a = new stdClass;\n    $a->a = $a;\n}\n$gen->next();\n?>")).toMatchSnapshot();
  });
});
