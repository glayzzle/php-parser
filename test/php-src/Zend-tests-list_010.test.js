// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_010.phpt
  it("Do not allow mixing [] and list()", function () {
    expect(parser.parseCode("<?php\nlist([$a]) = [[1]];\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
