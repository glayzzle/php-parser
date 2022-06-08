// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/gh7746.phpt
  it("Bug #GH-7746 mysqli_sql_exception->sqlstate is inaccessible", function () {
    expect(parser.parseCode("<?php\nrequire 'connect.inc';\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\ntry {\n    $link->query(\"stuff\");\n} catch (mysqli_sql_exception $exception) {\n    var_dump($exception->getSqlState());\n}\n?>")).toMatchSnapshot();
  });
});
