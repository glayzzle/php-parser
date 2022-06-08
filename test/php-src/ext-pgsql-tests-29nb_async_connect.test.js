// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/29nb_async_connect.phpt
  it("PostgreSQL non-blocking async connect", function () {
    expect(parser.parseCode("<?php\ninclude('config.inc');\ninclude('nonblocking.inc');\nif (!$db = pg_connect($conn_str, PGSQL_CONNECT_ASYNC)) {\n    die(\"pg_connect() error\");\n} elseif (pg_connection_status($db) === PGSQL_CONNECTION_BAD) {\n    die(\"pg_connect() error\");\n} elseif ($db_socket = pg_socket($db)) {\n    stream_set_blocking($db_socket, FALSE);\n} else {\n    die(\"pg_socket() error\");\n}\nwhile (TRUE) {\n    switch ($status = pg_connect_poll($db)) {\n        case PGSQL_POLLING_READING:\n            nb_is_readable($db_socket);\n            break;\n        case PGSQL_POLLING_WRITING:\n            nb_is_writable($db_socket);\n            break;\n        case PGSQL_POLLING_FAILED:\n            die(\"async connection failed\");\n        case PGSQL_POLLING_OK:\n            break 2;\n        default:\n            die(\"unknown poll status\");\n    }\n}\nassert(pg_connection_status($db) === PGSQL_CONNECTION_OK);\necho \"OK\";\npg_close($db);\n?>")).toMatchSnapshot();
  });
});
