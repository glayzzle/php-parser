// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug54674.phpt
  it("Bug #54674 mysqlnd valid_sjis_(head|tail) is using invalid operator and range.", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    $link = mysqli_init();\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[002] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    $japanese_so = pack('H4', '835c');\n    $link->set_charset('sjis');\n    var_dump($link->real_escape_string($japanese_so) === $japanese_so);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
