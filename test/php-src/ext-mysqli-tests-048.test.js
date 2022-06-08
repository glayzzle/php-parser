// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/048.phpt
  it("mysqli bind_result (OO-Style)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $mysql = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->select_db($db);\n    $mysql->query(\"DROP TABLE IF EXISTS test_fetch_null\");\n    $mysql->query(\"CREATE TABLE test_fetch_null(col1 tinyint, col2 smallint,\n        col3 int, col4 bigint,\n        col5 float, col6 double,\n        col7 date, col8 time,\n        col9 varbinary(10),\n        col10 varchar(50),\n        col11 char(20)) ENGINE=\" . $engine);\n    $mysql->query(\"INSERT INTO test_fetch_null(col1,col10, col11) VALUES(1,'foo1', 1000),(2,'foo2', 88),(3,'foo3', 389789)\");\n    $stmt = $mysql->prepare(\"SELECT col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11 from test_fetch_null\");\n    $stmt->bind_result($c1, $c2, $c3, $c4, $c5, $c6, $c7, $c8, $c9, $c10, $c11);\n    $stmt->execute();\n    $stmt->fetch();\n    $test = array($c1,$c2,$c3,$c4,$c5,$c6,$c7,$c8,$c9,$c10,$c11);\n    var_dump($test);\n    $stmt->close();\n    $mysql->query(\"DROP TABLE IF EXISTS test_fetch_null\");\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
