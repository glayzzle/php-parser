// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/02connection.phpt
  it("PostgreSQL connection", function () {
    expect(parser.parseCode("<?php\n// connection function tests\ninclude('config.inc');\n$db = pg_pconnect($conn_str);\nvar_dump($db);\nif (pg_connection_status($db) != PGSQL_CONNECTION_OK)\n{\n    echo \"pg_connection_status() error\\n\";\n}\nif (!pg_connection_reset($db))\n{\n    echo \"pg_connection_reset() error\\n\";\n}\nif (pg_connection_busy($db))\n{\n    echo \"pg_connection_busy() error\\n\";\n}\nif (function_exists('pg_transaction_status')) {\n    if (pg_transaction_status($db) != PGSQL_TRANSACTION_IDLE)\n    {\n        echo \"pg_transaction_status() error\\n\";\n    }\n}\nif (false === pg_host($db))\n{\n    echo \"pg_host() error\\n\";\n}\nif (!pg_dbname($db))\n{\n    echo \"pg_dbname() error\\n\";\n}\nif (!pg_port($db))\n{\n    echo \"pg_port() error\\n\";\n}\nif (pg_tty($db))\n{\n    echo \"pg_tty() error\\n\";\n}\nif (pg_options($db))\n{\n    echo \"pg_options() error\\n\";\n}\npg_close($db);\n?>")).toMatchSnapshot();
  });
});
