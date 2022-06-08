// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_client_stats_off.phpt
  it("mysqli_get_client_stats() - php_ini setting", function () {
    expect(parser.parseCode("<?php\n    $before = mysqli_get_client_stats();\n    if (!is_array($before) || empty($before)) {\n        printf(\"[001] Expecting non-empty array, got %s.\\n\", gettype($before));\n        var_dump($before);\n    }\n    // connect and table inc connect to mysql and create tables\n    require_once('connect.inc');\n    require_once('table.inc');\n    $after = mysqli_get_client_stats();\n    if ($before !== $after) {\n        printf(\"[002] Statistics have changed\\n\");\n        var_dump($before);\n        var_dump($after);\n    }\n    foreach ($after as $k => $v)\n        if ($v != 0) {\n            printf(\"[003] Field %s should not have any other value but 0, got %s.\\n\",\n                $k, $v);\n        }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
