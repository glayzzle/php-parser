// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69989_1.phpt
  it("Bug #69989: Cycle collection for yielded values", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield yield;\n}\n$gen = gen();\n$gen->send($gen);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
