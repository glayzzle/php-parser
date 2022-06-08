// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_unclonable.phpt
  it("Trying to clone mysqli_stmt object", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (!$stmt = mysqli_stmt_init($link))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    /* no, still bails out */\n    $stmt_clone = clone $stmt;\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
