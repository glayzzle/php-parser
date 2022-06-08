// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug64609.phpt
  it("Bug #64609 (pg_convert enum type support)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\npg_query($db, \"BEGIN\");\npg_query($db, \"CREATE TYPE t_enum AS ENUM ('ok', 'ko')\");\npg_query($db, \"CREATE TABLE test_enum (a t_enum)\");\n$fields = array('a' => 'ok');\n$converted = pg_convert($db, 'test_enum', $fields);\npg_query($db, \"ROLLBACK\");\nvar_dump($converted);\n?>")).toMatchSnapshot();
  });
});
