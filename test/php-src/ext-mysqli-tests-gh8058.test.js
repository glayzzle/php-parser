// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh8058.phpt
  it("GH-8058 (NULL pointer dereference in mysqlnd package (#81706))", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nmysqli_report(MYSQLI_REPORT_OFF);\n$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n// There should be no segfault due to NULL deref\n$stmt = $mysqli->prepare(\"select 1,2,3\");\n$stmt->bind_result($a,$a,$a);\n$stmt->prepare(\"\");\n$stmt->prepare(\"select \".str_repeat(\"'A',\", 0x1201).\"1\");\nunset($stmt); // trigger dtor\n// There should be no memory leak\n$stmt = $mysqli->prepare(\"select 1,2,3\");\n$stmt->bind_result($a,$a,$a);\n$stmt->prepare(\"\");\n$stmt->prepare(\"select 1\");\nunset($stmt); // trigger dtor\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$stmt = $mysqli->prepare(\"select 1,2,3\");\ntry {\n    // We expect an exception to be thrown\n    $stmt->prepare(\"\");\n} catch (mysqli_sql_exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
