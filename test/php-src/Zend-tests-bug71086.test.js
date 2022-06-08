// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71086.phpt
  it("Bug #71086: Invalid numeric literal parse error within highlight_string() function", function () {
    expect(parser.parseCode("<?php\n$highlightedString = highlight_string(\"<?php \\n 09 09 09;\", true);\nvar_dump($highlightedString);\n?>")).toMatchSnapshot();
  });
});
