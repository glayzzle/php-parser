// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug79084.phpt
  it("Bug #79084 (mysqlnd may fetch wrong column indexes with MYSQLI_BOTH)", function () {
    expect(parser.parseCode("<?php\nrequire_once('connect.inc');\n$sql = \"SELECT 0 as `2007`, 0 as `2008`, 0 as `2020`\";\n// unbuffered\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->real_query($sql);\n$res = $link->use_result();\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n// buffered\nini_set('mysqlnd.fetch_data_copy', false);\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $link->query($sql);\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n// buffered copies\nini_set('mysqlnd.fetch_data_copy', true);\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $link->query($sql);\n$row = $res->fetch_array();\nvar_dump($row);\n$link->close();\n?>")).toMatchSnapshot();
  });
});
