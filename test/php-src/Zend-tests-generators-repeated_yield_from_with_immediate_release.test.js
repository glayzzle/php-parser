// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/repeated_yield_from_with_immediate_release.phpt
  it("A generator can be yielded from multiple times, testing immediate release of the yield from'ing generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 42;\n}\nfunction yield_from($gen) {\n    yield from $gen;\n}\n$gen = gen();\nvar_dump(yield_from($gen)->current());\nvar_dump(yield_from($gen)->current());\n?>")).toMatchSnapshot();
  });
});
