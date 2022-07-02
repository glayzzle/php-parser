// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug24198.phpt
  it("", function () {
    expect(parser.parseCode("<?php\n$c = array('a' => 'aa','b' => 'bb');\nvar_dump(array_merge_recursive($c, $c));\n?>")).toMatchSnapshot();
  });
});
