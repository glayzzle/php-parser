// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug35103.phpt
  it("Bug #35103 (Bad handling of unsigned bigint)", function () {
    expect(parser.parseCode("<?php\n$drop = <<<EOSQL\nDROP TABLE test_bint;\nDROP TABLE test_buint;\nEOSQL;\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"DROP TABLE IF EXISTS test_bint\");\n    $mysql->query(\"CREATE TABLE test_bint (a bigint(20) default NULL) ENGINE=MYISAM\");\n    $mysql->query(\"INSERT INTO test_bint VALUES (9223372036854775807),(-9223372036854775808),(-2147483648),(-2147483649),(-2147483647),(2147483647),(2147483648),(2147483649)\");\n    $mysql->query(\"DROP TABLE IF EXISTS test_buint\");\n    $mysql->query(\"CREATE TABLE test_buint (a bigint(20) unsigned default NULL)\");\n    $mysql->query(\"INSERT INTO test_buint VALUES (18446744073709551615),(9223372036854775807),(9223372036854775808),(2147483647),(2147483649),(4294967295)\");\n    $stmt = $mysql->prepare(\"SELECT a FROM test_bint ORDER BY a\");\n    $stmt->bind_result($v);\n    $stmt->execute();\n    $i=0;\n    echo \"BIG INT SIGNED, TEST\\n\";\n    while ($i++ < 8) {\n        $stmt->fetch();\n        echo $v, \"\\n\";\n    }\n    $stmt->close();\n    echo str_repeat(\"-\", 20), \"\\n\";\n    $stmt = $mysql->prepare(\"SELECT a FROM test_buint ORDER BY a\");\n    $stmt->bind_result($v2);\n    $stmt->execute();\n    $j=0;\n    echo \"BIG INT UNSIGNED TEST\\n\";\n    while ($j++ < 6) {\n        $stmt->fetch();\n        echo $v2, \"\\n\";\n    }\n    $stmt->close();\n    $mysql->multi_query($drop);\n    $mysql->close();\n?>")).toMatchSnapshot();
  });
});
