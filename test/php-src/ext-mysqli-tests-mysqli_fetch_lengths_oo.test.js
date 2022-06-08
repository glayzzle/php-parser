// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_lengths_oo.phpt
  it("mysqli_result->lengths", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect\\n\");\n    require('table.inc');\n    if (!$res = $mysqli->query(\"SELECT id, label FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[002] [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    }\n    var_dump($res->lengths);\n    while ($row = $res->fetch_assoc())\n        var_dump($res->lengths);\n    var_dump($res->lengths);\n    $res->free_result();\n    try {\n        $res->lengths;\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    $mysqli->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
