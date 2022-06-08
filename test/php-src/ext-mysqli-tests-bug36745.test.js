// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug36745.phpt
  it("Bug #36745 (LOAD DATA LOCAL INFILE doesn't return correct error message)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $mysql = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"DROP TABLE IF EXISTS litest\");\n    $mysql->query(\"CREATE TABLE litest (a VARCHAR(20))\");\n    $mysql->query(\"LOAD DATA LOCAL INFILE 'filenotfound' INTO TABLE litest\");\n    var_dump($mysql->error);\n    $mysql->close();\n    printf(\"Done\");\n?>")).toMatchSnapshot();
  });
});
