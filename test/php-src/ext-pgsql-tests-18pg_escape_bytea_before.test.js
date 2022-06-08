// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/18pg_escape_bytea_before.phpt
  it("PostgreSQL pg_escape_bytea() functions (before connection)", function () {
    expect(parser.parseCode("<?php\n// optional functions\ninclude('config.inc');\n$image = file_get_contents(__DIR__ . '/php.gif');\n$esc_image = pg_escape_bytea($image);\n$db = pg_connect($conn_str);\n@pg_query($db, \"SET bytea_output = 'escape'\");\npg_query($db, 'INSERT INTO '.$table_name.' (num, bin) VALUES (9876, E\\''.$esc_image.'\\');');\n$result = pg_query($db, 'SELECT * FROM '.$table_name.' WHERE num = 9876');\n$rows = pg_fetch_all($result);\n$unesc_image = pg_unescape_bytea($rows[0]['bin']);\nif ($unesc_image !== $image) {\n    echo \"NG\";\n}\nelse {\n    echo \"OK\";\n}\n?>")).toMatchSnapshot();
  });
});
