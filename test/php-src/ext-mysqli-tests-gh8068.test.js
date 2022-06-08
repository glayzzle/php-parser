// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh8068.phpt
  it("GH-8068 (mysqli_fetch_object creates inaccessible properties)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $mysqli->query('SELECT 42');\n$obj = $res->fetch_object();\nvar_dump(\n    $obj,\n    $obj->{42}\n);\n?>")).toMatchSnapshot();
  });
});
