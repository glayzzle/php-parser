// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/split.phpt
  it("preg_split()", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_split('/*/', 'x'));\nvar_dump(preg_split('/[\\s, ]+/', 'x yy,zzz'));\nvar_dump(preg_split('/[\\s, ]+/', 'x yy,zzz', -1));\nvar_dump(preg_split('/[\\s, ]+/', 'x yy,zzz', 0));\nvar_dump(preg_split('/[\\s, ]+/', 'x yy,zzz', 1));\nvar_dump(preg_split('/[\\s, ]+/', 'x yy,zzz', 2));\nvar_dump(preg_split('/\\d*/', 'ab2c3u'));\nvar_dump(preg_split('/\\d*/', 'ab2c3u', -1, PREG_SPLIT_NO_EMPTY));\n?>")).toMatchSnapshot();
  });
});
