// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/typehints/bug76198.phpt
  it("\"iterable\" must not be fully qualified", function () {
    expect(parser.parseCode("<?php\nfunction foo(): \\iterable {\n    return [];\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
