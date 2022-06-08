// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug31668.phpt
  it("Bug #31668 (multi_query works exactly every other time (multi_query was global, now per connection))", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->multi_query('SELECT 1;SELECT 2');\n    do {\n        $res = $mysql->store_result();\n        if ($mysql->errno == 0) {\n            while ($arr = $res->fetch_assoc()) {\n                var_dump($arr);\n            }\n            $res->free();\n        }\n    } while ($mysql->next_result());\n    var_dump($mysql->error, __LINE__);\n    $mysql->close();\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->multi_query('SELECT 1;SELECT 2');\n    do {\n        $res = $mysql->store_result();\n        if ($mysql->errno == 0) {\n            while ($arr = $res->fetch_assoc()) {\n                var_dump($arr);\n            }\n            $res->free();\n        }\n    } while ($mysql->next_result());\n    var_dump($mysql->error, __LINE__);\n?>")).toMatchSnapshot();
  });
});
