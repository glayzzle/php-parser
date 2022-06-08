// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug70384.phpt
  it("mysqli_float_handling - ensure 4 byte float is handled correctly", function () {
    expect(parser.parseCode("<?php\n    require('connect.inc');\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n        die();\n    }\n    if (!mysqli_query($link, \"DROP TABLE IF EXISTS test\")) {\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n        die();\n    }\n    if (!mysqli_query($link, \"CREATE TABLE test(jsfield JSON) ENGINE = InnoDB\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n        die();\n    }\n    $jsfield_data = '{\"aaa\": 123}';\n    // Insert via string to make sure the real floating number gets to the DB\n    if (!mysqli_query($link, \"INSERT INTO test VALUES ('\".$jsfield_data.\"')\")) {\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n        die();\n    }\n    if (!($res = mysqli_query($link, \"SELECT *  FROM test\"))) {\n        printf(\"[005] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n        die();\n    }\n    $rows = $res->fetch_all();\n    if (json_encode($rows[0][0]) != json_encode($jsfield_data)) {\n        printf(\"[006] Data differs\");\n        var_dump(json_encode($rows[0][0]) != json_encode($jsfield_data));\n        die();\n    }\n    mysqli_close($link);\n    echo \"OK\";\n?>")).toMatchSnapshot();
  });
});
