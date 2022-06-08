// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_reap_async_query_error.phpt
  it("mysqli_reap_async_query() error reporting", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->query(')', MYSQLI_ASYNC | MYSQLI_USE_RESULT);\n$reads = $errors = $rejects = [$link];\nmysqli::poll($reads, $errors, $rejects, 1);\n$link = $reads[0];\ntry {\n    $rs = $link->reap_async_query();\n} catch (mysqli_sql_exception $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
