// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug67983.phpt
  it("Bug #67983: mysqlnd with MYSQLI_OPT_INT_AND_FLOAT_NATIVE fails to interpret bit columns", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$connection = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\nmysqli_options($connection, MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);\nmysqli_set_charset($connection, 'utf8');\nmysqli_query($connection, 'DROP TABLE IF EXISTS test');\nmysqli_query($connection, 'CREATE TABLE test (id BIT(8))');\nmysqli_query($connection, 'INSERT INTO test VALUES (0), (1), (42)');\n$res = mysqli_query($connection, 'SELECT * FROM test');\nwhile ($result = mysqli_fetch_assoc($res)) {\n    var_dump($result['id']);\n}\n?>")).toMatchSnapshot();
  });
});
