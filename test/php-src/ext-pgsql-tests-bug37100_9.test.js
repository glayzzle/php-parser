// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug37100_9.phpt
  it("Bug #37100 (data is returned truncated with BINARY CURSOR) (9.0+)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$db = pg_connect($conn_str);\n@pg_query($db, 'DROP TABLE test_bug');\npg_query($db, 'CREATE TABLE test_bug (binfield byteA) ;');\npg_query($db, \"INSERT INTO test_bug VALUES (decode('0103AA000812','hex'))\");\n$data = pg_query($db, \"SELECT binfield FROM test_bug\");\n$res = pg_fetch_result($data,0);\nvar_dump($res);\nvar_dump(bin2hex(pg_unescape_bytea($res)));\n$sql = \"BEGIN; DECLARE mycursor BINARY CURSOR FOR SELECT binfield FROM test_bug; FETCH ALL IN mycursor;\";\n$data = pg_query($db, $sql);\n$res = pg_fetch_result($data,0);\nvar_dump(strlen($res));\nvar_dump(bin2hex($res));\npg_close($db);\n$db = pg_connect($conn_str);\npg_query($db, 'DROP TABLE test_bug');\npg_close($db);\n?>")).toMatchSnapshot();
  });
});
