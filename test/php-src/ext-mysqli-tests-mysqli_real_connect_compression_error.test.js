// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_real_connect_compression_error.phpt
  it("Bug #80107 mysqli_query() fails for ~16 MB long query when compression is enabled", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$data_size = 16777174;\n// Insert with compression disabled:\n$mysqli = mysqli_init();\n$result = my_mysqli_real_connect($mysqli, $host, $user, $passwd, $db, $port, $socket);\n$mysqli->query(\"DROP TABLE IF EXISTS test\");\n$mysqli->query(\"CREATE TABLE test (`blob` LONGBLOB NOT NULL) ENGINE=MyISAM\");\n$data = str_repeat(\"x\", $data_size);\n$mysqli->query(\"INSERT INTO $db.test(`blob`) VALUE ('$data')\");\nvar_dump(mysqli_error_list($mysqli));\n$mysqli->close();\n// Insert with compression enabled:\n$mysqli = mysqli_init();\n$result = my_mysqli_real_connect($mysqli, $host, $user, $passwd, $db, $port, $socket, MYSQLI_CLIENT_COMPRESS);\n$data = str_repeat(\"x\", $data_size);\n$mysqli->query(\"INSERT INTO $db.test(`blob`) VALUE ('$data')\");\nvar_dump(mysqli_error_list($mysqli));\n$mysqli->close();\n?>")).toMatchSnapshot();
  });
});
