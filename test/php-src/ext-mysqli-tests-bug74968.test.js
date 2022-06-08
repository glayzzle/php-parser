// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug74968.phpt
  it("Bug #74968 PHP crashes when calling mysqli_result::fetch_object with an abstract class", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    abstract class test {\n        public $a;\n    }\n    $mysqli->query(\"SELECT 1 as a\")->fetch_object(\"test\");\n?>\n==DONE==")).toMatchSnapshot();
  });
});
