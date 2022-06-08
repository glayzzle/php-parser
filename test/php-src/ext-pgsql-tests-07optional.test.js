// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/07optional.phpt
  it("PostgreSQL optional functions", function () {
    expect(parser.parseCode("<?php\n// optional functions\ninclude('config.inc');\n$db = pg_connect($conn_str);\n$enc = pg_client_encoding($db);\npg_set_client_encoding($db, $enc);\nif (function_exists('pg_set_error_verbosity')) {\n    pg_set_error_verbosity($db, PGSQL_ERRORS_TERSE);\n    pg_set_error_verbosity($db, PGSQL_ERRORS_DEFAULT);\n    pg_set_error_verbosity($db, PGSQL_ERRORS_VERBOSE);\n}\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
