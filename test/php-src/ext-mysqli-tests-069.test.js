// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/069.phpt
  it("mysqli multi_query, next_result, more_results", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->multi_query('SELECT 1;SELECT 2');\n    do {\n        $res = $mysql->store_result();\n        if ($mysql->errno == 0) {\n            while ($arr = $res->fetch_assoc()) {\n                var_dump($arr);\n            }\n            $res->free();\n        }\n        if (!$mysql->more_results()) {\n            break;\n        }\n    } while (@$mysql->next_result());\n    $mysql->close();\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
