// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug33491.phpt
  it("Bug #33491 (extended mysqli class crashes when result is not object)", function () {
    expect(parser.parseCode("<?php\nclass DB extends mysqli\n{\n  public function query_single($query) {\n    $result = parent::query($query);\n    $result->fetch_row(); // <- Here be crash\n  }\n}\nrequire_once(\"connect.inc\");\n// Segfault when using the DB class which extends mysqli\n$DB = new DB($host, $user, $passwd, $db, $port, $socket);\n$DB->query_single('SELECT DATE()');\n?>")).toMatchSnapshot();
  });
});
