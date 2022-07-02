// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_012.phpt
  it("Disallow empty elements in normal arrays", function () {
    expect(parser.parseCode("<?php\nvar_dump([, 1, 2]);\n?>")).toMatchSnapshot();
  });
});
