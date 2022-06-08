// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/074.phpt
  it("mysqli_autocommit() tests", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    var_dump($mysqli->autocommit(false));\n    $result = $mysqli->query(\"SELECT @@autocommit\");\n    var_dump($result->fetch_row());\n    var_dump($mysqli->autocommit(true));\n    $result = $mysqli->query(\"SELECT @@autocommit\");\n    var_dump($result->fetch_row());\n?>")).toMatchSnapshot();
  });
});
