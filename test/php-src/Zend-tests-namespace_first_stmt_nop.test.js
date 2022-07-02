// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/namespace_first_stmt_nop.phpt
  it("Nop statement before namespace", function () {
    expect(parser.parseCode("<?php\n;\nnamespace Foo;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
