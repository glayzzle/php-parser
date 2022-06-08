// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug38710.phpt
  it("Bug #38710 (data leakage because of nonexisting boundary checking in statements)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$db = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n$qry=$db->stmt_init();\n$qry->prepare(\"SELECT REPEAT('a',100000)\");\n$qry->execute();\n$qry->bind_result($text);\n$qry->fetch();\nif ($text !== str_repeat('a', ($IS_MYSQLND || mysqli_get_server_version($db) > 50110)? 100000:(mysqli_get_server_version($db)>=50000? 8193:8191))) {\n    var_dump(strlen($text));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
