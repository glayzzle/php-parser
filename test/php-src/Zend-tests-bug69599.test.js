// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69599.phpt
  it("Bug #69599: Strange generator+exception+variadic crash", function () {
    expect(parser.parseCode("<?php\nfunction crash() {\n    sin(...[0]);\n    throw new \\Exception();\n    yield;\n}\niterator_to_array(crash());\n?>")).toMatchSnapshot();
  });
});
