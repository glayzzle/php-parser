// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug29311.phpt
  it("Bug #29311 (Cannot override mysqli constructor)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /* class 1 calls parent constructor */\n    class mysql1 extends mysqli {\n        function __construct() {\n            global $host, $user, $passwd, $db, $port, $socket;\n            parent::__construct($host, $user, $passwd, $db, $port, $socket);\n        }\n    }\n    /* class 2 has an own constructor */\n    class mysql2 extends mysqli {\n        function __construct() {\n            global $host, $user, $passwd, $db, $port, $socket;\n            $this->connect($host, $user, $passwd, $db, $port, $socket);\n        }\n    }\n    /* class 3 has no constructor */\n    class mysql3 extends mysqli {\n    }\n    $foo[0] = new mysql1();\n    $foo[1] = new mysql2();\n    $foo[2] = new mysql3($host, $user, $passwd, $db, $port, $socket);\n    for ($i=0; $i < 3; $i++) {\n        if (($result = $foo[$i]->query(\"SELECT DATABASE()\"))) {\n            $row = $result->fetch_row();\n            if ($row[0] != $db)\n                printf(\"%d: %s\\n\", $i, $row[0]);\n            $result->close();\n        }\n        $foo[$i]->close();\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
