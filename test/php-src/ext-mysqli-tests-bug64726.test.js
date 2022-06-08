// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug64726.phpt
  it("Bug #63398 (Segfault when calling fetch_object on a use_result and DB pointer has closed)", function () {
    expect(parser.parseCode("<?php\nrequire 'connect.inc';\n$db = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\nmysqli_report(MYSQLI_REPORT_ERROR);\n$result = $db->query('SELECT 1', MYSQLI_USE_RESULT);\n$db->close();\nvar_dump($result->fetch_object());\n?>")).toMatchSnapshot();
  });
});
