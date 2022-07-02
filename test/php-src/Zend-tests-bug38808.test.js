// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38808.phpt
  it("Bug #38808 (\"maybe ref\" issue for current() and others)", function () {
    expect(parser.parseCode("<?php\n$current = \"current\";\n$next = \"next\";\n$b = array(1=>'one', 2=>'two');\n$a =& $b;\necho $current($a).\"\\n\";\n$next($a);\necho $current($a).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
