// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cast_removed.phpt
  it("The (unset) cast is removed", function () {
    expect(parser.parseCode("<?php\n$x = 1;\nvar_dump((unset) $x);\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
