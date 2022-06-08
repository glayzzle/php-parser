// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31341.phpt
  it("Bug #31341 (escape on curly inconsistent)", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    \"$     \\{    \",\n    \"      \\{   $\",\n    \"      \\{$   \",\n    \"      $\\{   \",\n    \"      \\$\\{  \",\n    \"      \\{\\$  \",\n    \"\\$    \\{    \",\n    \"      \\{  \\$\",\n    \"%     \\{    \");\nforeach ($a as $v) {\n    echo(\"'$v'\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
