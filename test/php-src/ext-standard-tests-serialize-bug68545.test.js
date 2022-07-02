// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug68545.phpt
  it("Bug #68545 NULL pointer dereference in unserialize.c:var_push_dtor", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('a:6:{a:6:{s:3:\"322\";s:3:\"bar\";s:3:\"bar\";s:3:\"foo\";a:6:{a:6:{s:3:\"322\";s:3:\"bar\";s:3:\"bar\";s:3:\"foo\";s:3:\"bar\";a:6:{a:6:{s:3:\"322\";s:3:\"bar\";s:3:\"bar\";s:3:\"foo\";a:6:{a:6:{s:3:\"322\";s:3:\"bar\";s:3:\"b22\";s:3:\"bar\";s:3:\"bar\";s:3:\"foo\";s:3:\"bar\";a:6:{a:6:{s:3:\"322\";s:3:\"bar\";s:3:\"bar\";s:3:\"foo\";s:3:\"bar\";s:3:\"bar\";'));\n?>")).toMatchSnapshot();
  });
});
