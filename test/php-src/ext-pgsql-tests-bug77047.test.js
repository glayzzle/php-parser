// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug77047.phpt
  it("Bug #77047 pg_insert has a broken regex for the 'TIME WITHOUT TIMEZONE' data type", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ninclude 'config.inc';\n$db = pg_connect($conn_str);\npg_query($db, \"DROP TABLE IF EXISTS bug77047\");\npg_query($db, \"CREATE TABLE bug77047 (\n        t TIME WITHOUT TIME ZONE\n    )\");\npg_insert($db, \"bug77047\", array(\"t\" => \"13:31\"));\npg_insert($db, \"bug77047\", array(\"t\" => \"13:31:13\"));\npg_insert($db, \"bug77047\", array(\"t\" => \"1:2:3\"));\npg_insert($db, \"bug77047\", array(\"t\" => \"xyz\"));\npg_insert($db, \"bug77047\", array(\"t\" => NULL));\npg_insert($db, \"bug77047\", array(\"t\" => \"\"));\n$res = pg_query($db, \"SELECT t FROM bug77047\");\nwhile (false !== ($row = pg_fetch_row($res))) {\n    var_dump(array_pop($row));\n}\n?>")).toMatchSnapshot();
  });
});
