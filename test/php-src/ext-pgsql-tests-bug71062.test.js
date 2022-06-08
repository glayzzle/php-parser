// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug71062.phpt
  it("Bug #71062 pg_convert() doesn't accept ISO 8601 for datatype timestamp", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$table = \"public.test_table_bug71062_bug71062\";\npg_query($db, \"CREATE TABLE $table ( test_field TIMESTAMPTZ )\");\n// ISO 8601 (with 'T' between date and time)\n$date_string_php_iso8601 = date_create('8 Dec 2015 5:38')->format(DateTime::ISO8601);\n// ISO 8601 with the 'T' removed\n$modified_format = 'Y-m-d H:i:sO';\n$date_string_modified_iso8601 = date_create('8 Dec 2015 5:38')->format($modified_format);\nprintf(\"trying format %s \\n\", DateTime::ISO8601);\npg_convert($db, $table, ['test_field' => $date_string_php_iso8601]);\nprintf(\"trying format %s \\n\", $modified_format);\npg_convert($db, $table, ['test_field' => $date_string_modified_iso8601]);\nprint \"done\\n\";\npg_query($db, \"DROP TABLE $table\");\n?>\n==OK==")).toMatchSnapshot();
  });
});
