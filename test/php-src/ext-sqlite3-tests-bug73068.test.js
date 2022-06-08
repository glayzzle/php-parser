// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug73068.phpt
  it("Bug #73068 SQLite3 may fail to DELETE", function () {
    expect(parser.parseCode("<?php\n$db = new \\SQLite3(':memory:') ;\n$db->exec(\"CREATE TABLE IF NOT EXISTS t1(a INT UNIQUE, b INT)\");\n$db->exec(\"INSERT OR REPLACE INTO t1(a,b) VALUES('1','2')\");\n$r = $db->query(\"SELECT * FROM t1 WHERE a='1' AND b='2'\");\nvar_dump($r->fetchArray());\n$db->exec(\"DELETE FROM t1 WHERE a='1' AND b='2'\");\n$r = $db->query(\"SELECT * FROM t1;\");\nvar_dump($r->fetchArray());\n$db->close();\n?>\n==OK==")).toMatchSnapshot();
  });
});
