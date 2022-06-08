// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug30967.phpt
  it("Bug #30967 (problems with properties declared in the class extending the class extending MySQLi)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    class mysql1 extends mysqli {\n    }\n    class mysql2 extends mysql1 {\n    }\n    $mysql = new mysql2($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"THIS DOES NOT WORK\");\n    printf(\"%d\\n\", $mysql->errno);\n    $mysql->close();\n?>")).toMatchSnapshot();
  });
});
