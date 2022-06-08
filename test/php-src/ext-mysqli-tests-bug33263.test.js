// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug33263.phpt
  it("Bug #33263 (mysqli_real_connect in __construct)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    class test extends mysqli\n    {\n        public function __construct($host, $user, $passwd, $db, $port, $socket) {\n            parent::__construct();\n            parent::real_connect($host, $user, $passwd, $db, $port, $socket);\n        }\n    }\n    $mysql = new test($host, $user, $passwd, $db, $port, $socket);\n    $stmt = $mysql->prepare(\"SELECT DATABASE()\");\n    $stmt->execute();\n    $stmt->bind_result($database);\n    $stmt->fetch();\n    $stmt->close();\n    if ($database != $db)\n        printf(\"[001] Expecting '%s' got %s/'%s'.\\n\",\n            gettype($database), $database);\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
