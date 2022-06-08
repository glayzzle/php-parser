// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug55653.phpt
  it("Bug #55653 \tPS crash with libmysql when binding same variable as param and out", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    $in_and_out = \"a\";\n    if (!($stmt = $link->stmt_init()))\n        printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n    if (!($stmt->prepare(\"SELECT ?\")) ||\n        !($stmt->bind_param(\"s\", $in_and_out)) ||\n        !($stmt->execute()) ||\n        !($stmt->bind_result($in_and_out)))\n        printf(\"[003] [%d] %s\\n\", $stmt->errno, $stmt->error);\n    if (!$stmt->fetch())\n        printf(\"[004] [%d] %s\\n\", $stmt->errno, $stmt->error);\n    if (\"a\" !== $in_and_out)\n        printf(\"[005] Wrong result: '%s'\\n\", $in_and_out);\n    echo \"done!\";\n?>")).toMatchSnapshot();
  });
});
