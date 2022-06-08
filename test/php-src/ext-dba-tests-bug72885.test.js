// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug72885.phpt
  it("Bug #72885 flatfile: dba_fetch() fails to read replaced entry", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\n$db = dba_open($db_filename, 'c', 'flatfile');\ndba_insert('foo', 'bar', $db);\nvar_dump(dba_replace('foo', 'baz', $db));\nvar_dump(dba_fetch('foo', $db));\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
