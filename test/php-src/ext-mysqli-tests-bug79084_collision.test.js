// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug79084_collision.phpt
  it("Bug #79084 (mysqlnd may fetch wrong column indexes with MYSQLI_BOTH) - collision", function () {
    expect(parser.parseCode("<?php\nrequire_once('connect.inc');\n$sql = \"SELECT 11111 as `1`, 22222 as `2`\";\n// unbuffered\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->real_query($sql);\n$res = $link->use_result();\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n// buffered\nini_set('mysqlnd.fetch_data_copy', false);\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $link->query($sql);\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n// buffered copies\nini_set('mysqlnd.fetch_data_copy', true);\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $link->query($sql);\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n?>")).toMatchSnapshot();
  });
});
