// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug80240.phpt
  it("Bug #80240: Use after free multi yield from", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 0;\n    yield from gen();\n}\nfunction bar($gen) {\n    yield from $gen;\n}\n$gen = gen();\n$a = bar($gen);\n$b = bar($gen);\n$a->rewind();\n$b->rewind();\n$a->next();\nunset($gen);\nunset($a);\nunset($b);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
