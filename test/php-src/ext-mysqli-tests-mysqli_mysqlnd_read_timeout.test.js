// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_mysqlnd_read_timeout.phpt
  it("mysqlnd.net_read_timeout limit check", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    if (!$res = mysqli_query($link, \"SELECT SLEEP(5)\"))\n        printf(\"[002] [%d] %s\\n\",  mysqli_errno($link), mysqli_error($link));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
