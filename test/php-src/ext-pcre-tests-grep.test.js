// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/grep.phpt
  it("preg_grep()", function () {
    expect(parser.parseCode("<?php\n$array = array('a', '1', 'q6', 'h20');\nvar_dump(preg_grep('/^(\\d|.\\d)$/', $array));\nvar_dump(preg_grep('/^(\\d|.\\d)$/', $array, PREG_GREP_INVERT));\n?>")).toMatchSnapshot();
  });
});
