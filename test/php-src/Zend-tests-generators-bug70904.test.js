// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug70904.phpt
  it("Bug #70904 (yield from incorrectly marks valid generator as finished)", function () {
    expect(parser.parseCode("<?php\nfunction g1() {\n    yield 1;\n}\nfunction g2($g1) {\n    yield from $g1;\n    echo \"reached!\\n\";\n    yield 2;\n}\n$g1 = g1();\n$g2 = g2($g1);\nvar_dump($g2->valid());\nvar_dump($g2->current());\n$g1->next();\nvar_dump($g1->valid());\nvar_dump($g2->valid());\nvar_dump($g2->current());\n$g2->next();\nvar_dump($g2->valid());\nvar_dump($g2->current());\n$g2->next();\nvar_dump($g2->valid());\nvar_dump($g2->current());\n?>")).toMatchSnapshot();
  });
});
