// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/04async_query.phpt
  it("PostgreSQL async query", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\n$db = pg_connect($conn_str);\nif (!pg_send_query($db, \"SELECT * FROM \".$table_name.\";\")) {\n    echo \"pg_send_query() error\\n\";\n}\nwhile(pg_connection_busy($db));  // busy wait: intended\nif (pg_connection_status($db) === PGSQL_CONNECTION_BAD) {\n    echo \"pg_connection_status() error\\n\";\n}\nif (!($result = pg_get_result($db)))\n{\n    echo \"pg_get_result() error\\n\";\n}\nif (!($rows = pg_num_rows($result))) {\n    echo \"pg_num_rows() error\\n\";\n}\nfor ($i=0; $i < $rows; $i++)\n{\n    pg_fetch_array($result, $i, PGSQL_NUM);\n}\nfor ($i=0; $i < $rows; $i++)\n{\n    pg_fetch_object($result);\n}\nfor ($i=0; $i < $rows; $i++)\n{\n    pg_fetch_row($result, $i);\n}\nfor ($i=0; $i < $rows; $i++)\n{\n    pg_fetch_result($result, $i, 0);\n}\npg_num_rows(pg_query($db, \"SELECT * FROM \".$table_name.\";\"));\npg_num_fields(pg_query($db, \"SELECT * FROM \".$table_name.\";\"));\npg_field_name($result, 0);\npg_field_num($result, $field_name);\npg_field_size($result, 0);\npg_field_type($result, 0);\npg_field_prtlen($result, 0);\npg_field_is_null($result, 0);\nif (!pg_send_query($db, \"INSERT INTO \".$table_name.\" VALUES (8888, 'GGG');\"))\n{\n    echo \"pg_send_query() error\\n\";\n}\npg_last_oid($result);\npg_free_result($result);\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
