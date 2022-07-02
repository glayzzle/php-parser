// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/027.phpt
  it("Testing dynamic calls using variable variables with curly syntax", function () {
    expect(parser.parseCode("<?php\n$a = 'b';\n$b = 'c';\n$c = 'strtoupper';\nvar_dump(${${$a}}('foo') == 'FOO');\n$a = 'b';\n$b = 'c';\n$c = 'strtoupper';\n$strtoupper = 'strtolower';\nvar_dump(${${++$a}}('FOO') == 'foo');\n?>")).toMatchSnapshot();
  });
});
