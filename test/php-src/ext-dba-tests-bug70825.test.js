// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug70825.phpt
  it("Bug #70825 (Cannot fetch multiple values with group in ini file)", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'bug70825.ini';\n$db = dba_open($filename, 'n', 'inifile');\ndba_insert('foo', 23, $db);\ndba_insert('foo', 42, $db);\ndba_insert('foo', 1337, $db);\nvar_dump(dba_fetch('foo', -1, $db));\nvar_dump(dba_fetch('foo', -1, $db));\nvar_dump(dba_fetch('foo', -1, $db));\ndba_close($db);\nunlink($filename);\n$db = dba_open($filename, 'n', 'inifile');\ndba_insert(['foo', 'bar'], 23, $db);\ndba_insert(['foo', 'bar'], 42, $db);\ndba_insert(['foo', 'bar'], 1337, $db);\nvar_dump(dba_fetch(['foo', 'bar'], -1, $db));\nvar_dump(dba_fetch(['foo', 'bar'], -1, $db));\nvar_dump(dba_fetch(['foo', 'bar'], -1, $db));\ndba_close($db);\nunlink($filename);\n$db = dba_open($filename, 'n', 'inifile');\ndba_insert('[foo]bar', 23, $db);\ndba_insert('[foo]bar', 42, $db);\ndba_insert('[foo]bar', 1337, $db);\nvar_dump(dba_fetch('[foo]bar', -1, $db));\nvar_dump(dba_fetch('[foo]bar', -1, $db));\nvar_dump(dba_fetch('[foo]bar', -1, $db));\ndba_close($db);\nunlink($filename);\n$db = dba_open($filename, 'n', 'inifile');\ndba_insert('[foo]bar', 23, $db);\ndba_insert('[foo]bar', 42, $db);\ndba_insert('[foo]bar', 1337, $db);\nvar_dump(dba_fetch('[foo]bar', 0, $db));\nvar_dump(dba_fetch('[foo]bar', 1, $db));\nvar_dump(dba_fetch('[foo]bar', 2, $db));\ndba_close($db);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
