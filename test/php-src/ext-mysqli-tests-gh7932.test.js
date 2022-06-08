// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh7932.phpt
  it("GH-7972 (MariaDB version prefix not always stripped)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n// It seems we can only test the happy path...\nif (str_starts_with($mysqli->server_info, '5.5.5-')) {\n    print(\"Expecting stripped prefix. Found: \" . $mysqli->server_info . \"\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
