// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_chain_dtor_order.phpt
  it("Leaf link may need to be invalidated depending on dtor order", function () {
    expect(parser.parseCode("<?php\nfunction gen2() {\n    yield 1;\n}\nfunction gen() {\n    yield from gen2();\n}\nfunction bar($g) {\n    yield from $g;\n}\n$gen = gen();\n$bar = bar($gen);\nvar_dump($bar->current());\n$copy = $bar;\nunset($gen);\n?>")).toMatchSnapshot();
  });
});
