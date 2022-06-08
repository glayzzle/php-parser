// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_011.phpt
  it("Disallow list() usage as if it were an array", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(list(1, 2, 3));\n?>")).toThrowErrorMatchingSnapshot();
  });
});
