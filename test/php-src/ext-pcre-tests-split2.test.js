// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/split2.phpt
  it("preg_split() 2nd test", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_DELIM_CAPTURE));\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_OFFSET_CAPTURE));\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE));\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE));\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_OFFSET_CAPTURE));\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u', -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_OFFSET_CAPTURE));\nini_set('pcre.recursion_limit', 1);\nvar_dump(preg_last_error() == PREG_NO_ERROR);\nvar_dump(preg_split('/(\\d*)/', 'ab2c3u'));\nvar_dump(preg_last_error() == PREG_RECURSION_LIMIT_ERROR);\n?>")).toMatchSnapshot();
  });
});
