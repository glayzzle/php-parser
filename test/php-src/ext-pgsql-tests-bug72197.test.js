// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug72197.phpt
  it("Bug #72197 pg_lo_create arbitrary read", function () {
    expect(parser.parseCode("<?php\n/* This shouldn't crash. */\n$var1=-32768;\n$var2=\"12\";\ntry {\n    pg_lo_create($var1, $var2);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* This should work correctly. */\ninclude('config.inc');\n/* Check with explicit link. */\n$conn = pg_connect($conn_str);\npg_query($conn, \"BEGIN\");\n$oid = pg_lo_create($conn);\nvar_dump($oid);\n/* Check with default link */\n$oid = pg_lo_create();\nvar_dump($oid);\n/* don't commit */\npg_query($conn, \"ROLLBACK\");\npg_close($conn);\n?>")).toMatchSnapshot();
  });
});
