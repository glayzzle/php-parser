// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug65035.phpt
  it("Bug #65035: yield / exit segfault", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    f();\n    yield;\n}\nfunction f() {\n    exit('Done');\n}\n$gen = gen();\n$gen->current();\n?>")).toMatchSnapshot();
  });
});
