// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug51605.phpt
  it("Bug #51605 Mysqli - zombie links", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    $link = mysqli_init();\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[002] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    mysqli_close($link);\n    echo \"closed once\\n\";\n    $link = mysqli_init();\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[002] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    mysqli_close($link);\n    echo \"closed twice\\n\";\n    $link = mysqli_init();\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[003] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    mysqli_close($link);\n    echo \"closed for third time\\n\";\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
