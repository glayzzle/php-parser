// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pgsql/tests/bug65119.phpt
  it("Bug #65119 (pg_copy_from() modifies input array variable)", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\nfunction test(Array $values, $conn_str) {\n  $connection = pg_pconnect($conn_str, PGSQL_CONNECT_FORCE_NEW);\n  pg_query($connection, \"begin\");\n  pg_query($connection, \"CREATE TABLE bug65119 (i INTEGER)\");\n  pg_copy_from($connection, \"bug65119\", $values, \"\\t\", \"NULL\");\n  pg_query($connection, \"rollback\");\n}\n$values = Array(1,2,3);\nvar_dump($values);\ntest($values, $conn_str);\nvar_dump($values);\n?>")).toMatchSnapshot();
  });
});
