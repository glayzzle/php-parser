// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_host_info.phpt
  it("mysqli_get_host_info()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require \"table.inc\";\n    if (!is_string($info = mysqli_get_host_info($link)) || ('' === $info))\n        printf(\"[003] Expecting string/any_non_empty, got %s/%s\\n\", gettype($info), $info);\n    if ($IS_MYSQLND && $host != 'localhost' && $host != '127.0.0.1' && $port != '' && $host != \"\" && strtoupper(substr(PHP_OS, 0, 3)) != 'WIN') {\n        /* this should be a TCP/IP connection and not a Unix Socket (or SHM or Named Pipe) */\n        if (!stristr($info, \"TCP/IP\"))\n            printf(\"[004] Should be a TCP/IP connection but mysqlnd says '%s'\\n\", $info);\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
