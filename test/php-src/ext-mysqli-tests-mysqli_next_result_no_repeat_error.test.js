// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_next_result_no_repeat_error.phpt
  it("next_result reports errors from previous calls", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/connect.inc';\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\ntry {\n    $mysqli->query(\"Syntax Error\");\n} catch (mysqli_sql_exception $e) {\n}\n$mysqli->next_result();\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
