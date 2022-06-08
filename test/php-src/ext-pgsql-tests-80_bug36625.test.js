// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/80_bug36625.phpt
  it("Bug #36625 (8.0+) (pg_trace() does not work)", function () {
    expect(parser.parseCode("<?php\nrequire_once('config.inc');\n$dbh = @pg_connect($conn_str);\nif (!$dbh) {\n    die ('Could not connect to the server');\n}\n$tracefile = __DIR__ . '/trace.tmp';\n@unlink($tracefile);\nvar_dump(file_exists($tracefile));\npg_trace($tracefile, 'w', $dbh);\n$res = pg_query($dbh, 'select 1');\nvar_dump($res);\npg_close($dbh);\n$found = 0;\nfunction search_trace_file($line)\n{\n    if (strpos($line, '\"select 1\"') !== false || strpos($line, \"'select 1'\") !== false) {\n        $GLOBALS['found']++;\n    }\n}\n$trace = file($tracefile);\narray_walk($trace, 'search_trace_file');\nvar_dump($found > 0);\nvar_dump(file_exists($tracefile));\n@unlink($tracefile);\n?>")).toMatchSnapshot();
  });
});
