// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gc_with_root_parent_mismatch.phpt
  it("Generator GC when the yield from parent chain does not reach the root", function () {
    expect(parser.parseCode("<?php\nfunction root() {\n    yield 1;\n    yield 2;\n}\nfunction delegate($gen) {\n    yield from $gen;\n}\n$gen = delegate(delegate(root()));\n$gen1 = delegate(delegate($gen));\n$gen2 = delegate(delegate($gen));\nvar_dump($gen1->current());\nvar_dump($gen2->current());\n$gen1->next();\n$gen1->next();\ngc_collect_cycles();\n?>")).toMatchSnapshot();
  });
});
