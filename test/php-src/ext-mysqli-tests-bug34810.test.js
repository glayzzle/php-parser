// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug34810.phpt
  it("Bug #34810 (mysqli::init() and others use wrong $this pointer without checks)", function () {
    expect(parser.parseCode("<?php\nclass DbConnection {\n    public function connect() {\n        require_once(\"connect.inc\");\n        /* Pass false as $connect_flags cannot be accessed via globals. */\n        $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket, false);\n        var_dump($link);\n        $link = mysqli_init();\n        var_dump($link);\n        $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket, false);\n        $mysql->query(\"DROP TABLE IF EXISTS test_warnings\");\n        $mysql->query(\"CREATE TABLE test_warnings (a int not null)\");\n        $mysql->query(\"SET sql_mode=''\");\n        $mysql->query(\"INSERT INTO test_warnings VALUES (1),(2),(NULL)\");\n        $warning = $mysql->get_warnings();\n        if (!$warning)\n            printf(\"[001] No warning!\\n\");\n        if ($warning->errno == 1048 || $warning->errno == 1253) {\n            /* 1048 - Column 'a' cannot be null, 1263 - Data truncated; NULL supplied to NOT NULL column 'a' at row */\n            if (\"HY000\" != $warning->sqlstate)\n                printf(\"[003] Wrong sql state code: %s\\n\", $warning->sqlstate);\n            if (\"\" == $warning->message)\n                printf(\"[004] Message string must not be empty\\n\");\n        } else {\n            printf(\"[002] Empty error message!\\n\");\n            var_dump($warning);\n        }\n    }\n}\n$db = new DbConnection();\n$db->connect();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
