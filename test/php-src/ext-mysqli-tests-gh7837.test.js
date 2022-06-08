// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh7837.phpt
  it("Bug GH-7837 (large bigints may be truncated)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\n$mysql = new mysqli($host, $user, $passwd, $db, $port, $socket);\n$mysql->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);\n$mysql->query(\"DROP TABLE IF EXISTS test\");\n$mysql->query(\"CREATE TABLE test (`ubigint` bigint unsigned NOT NULL) ENGINE=InnoDB\");\n$mysql->query(\"INSERT INTO test (`ubigint`) VALUES (18446744073709551615)\");\n$mysql->query(\"INSERT INTO test (`ubigint`) VALUES (9223372036854775808)\");\n$mysql->query(\"INSERT INTO test (`ubigint`) VALUES (1)\");\n$result = $mysql->query(\"SELECT ubigint FROM test\");\nvar_dump($result->fetch_all());\n?>")).toMatchSnapshot();
  });
});
