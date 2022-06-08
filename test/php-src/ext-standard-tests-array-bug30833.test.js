// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug30833.phpt
  it("Bug #30833 (array_count_values() modifies input array)", function () {
    expect(parser.parseCode("<?php\n$foo = array('abc', '0000');\nvar_dump($foo);\n$count = array_count_values( $foo );\nvar_dump($count);\nvar_dump($foo);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
