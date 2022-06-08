// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/066.phpt
  it("function test: mysqli_warning object", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    if (!mysqli_query($mysql, \"SET sql_mode=''\"))\n        printf(\"[002] Cannot set SQL-Mode, [%d] %s\\n\", mysqli_errno($mysql), mysqli_error($mysql));\n    $mysql->query(\"DROP TABLE IF EXISTS test_warnings\");\n    $mysql->query(\"CREATE TABLE test_warnings (a int not null) ENGINE=myisam\");\n    $mysql->query(\"INSERT INTO test_warnings VALUES (1),(2),(NULL)\");\n    if (($warning = $mysql->get_warnings())) {\n        do {\n            printf(\"Warning\\n\");\n        } while ($warning->next());\n    }\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
