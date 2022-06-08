// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_pgsql/tests/bug_64705.phpt
  it("Bug #64705 errorInfo property of PDOException is null when PDO::__construct() fails", function () {
    expect(parser.parseCode("<?php\n$dsn = 'pgsql:host=DonotExistsHost;dbname=test;user=foo;password=wrongpass';\ntry {\n  $pdo = new \\PDO($dsn, null, null);\n} catch (\\PDOException $e) {\n  var_dump(!empty($e->errorInfo) && is_array($e->errorInfo));\n}\n?>")).toMatchSnapshot();
  });
});
