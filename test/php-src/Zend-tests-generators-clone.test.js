// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/clone.phpt
  it("Generators cannot be cloned", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n}\n$gen = gen();\nclone $gen;\n?>")).toMatchSnapshot();
  });
});
