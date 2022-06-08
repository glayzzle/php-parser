// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug71514.phpt
  it("Bug #71514 (Bad dba_replace condition because of wrong API usage)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'bug71514.ini';\n$db = dba_open($filename, 'c', 'inifile');\ndba_insert('foo', 'value1', $db);\ndba_replace('foo', 'value2', $db);\nvar_dump(dba_fetch('foo', $db));\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
