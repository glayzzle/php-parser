// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug75018.phpt
  it("Bug #75018 Data corruption when reading fields of bit type", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysqli = new mysqli(\"$host:$port\", $user, $passwd, $db);\n$tbl = \"test\";\n$sql = \"DROP TABLE IF EXISTS $tbl\";\n$mysqli->query($sql);\n$sql = \"CREATE TABLE $tbl (bit_column_1 bit(16) NOT NULL) DEFAULT CHARSET=utf8\";\n$mysqli->query($sql);\n$sql = \"INSERT INTO $tbl (bit_column_1) VALUES (0)\";\n$mysqli->query($sql);\n$sql = \"INSERT INTO $tbl (bit_column_1) VALUES (0b10101010101)\";\n$mysqli->query($sql);\n$sql = \"SELECT bit_column_1 FROM $tbl\";\n$result = $mysqli->query($sql);\nwhile ($row = $result->fetch_assoc()) {\n    var_dump($row['bit_column_1']);\n}\n?>")).toMatchSnapshot();
  });
});
