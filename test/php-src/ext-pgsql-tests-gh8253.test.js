// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/gh8253.phpt
  it("pg_insert() fails for references", function () {
    expect(parser.parseCode("<?php\ninclude \"config.inc\";\nfunction fee(&$a) {}\n$a = [\"bar\" => \"testing\"];\nfee($a[\"bar\"]);\n$db = pg_connect($conn_str);\npg_query($db, \"DROP TABLE IF EXISTS gh8253\");\npg_query($db, \"CREATE TABLE gh8253 (bar text);\");\npg_insert($db, \"gh8253\", $a);\n$res = pg_query($db, \"SELECT * FROM gh8253\");\nvar_dump(pg_fetch_all($res));\n?>")).toMatchSnapshot();
  });
});
