// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug76335.phpt
  it("Bug #76335 \"link(): Bad file descriptor\" with non-ASCII path", function () {
    expect(parser.parseCode("<?php\n$d0 = __DIR__ . DIRECTORY_SEPARATOR . \"á\";\n$d1 = __DIR__ . DIRECTORY_SEPARATOR . \"a\";\n$fn = __DIR__ . DIRECTORY_SEPARATOR . \"file\";\n$l0 = $d0 . DIRECTORY_SEPARATOR . \"b\";\n$l1 = $d1 . DIRECTORY_SEPARATOR . \"b\";\nmkdir($d0);\nmkdir($d1);\nfile_put_contents($fn, \"\");\nchdir($d0);\nvar_dump(link($d0 . DIRECTORY_SEPARATOR . \"..\" . DIRECTORY_SEPARATOR . \"file\", $l0));\nchdir($d1);\nvar_dump(link($d1 . DIRECTORY_SEPARATOR . \"..\" . DIRECTORY_SEPARATOR . \"file\", $l1));\n?>")).toMatchSnapshot();
  });
});
