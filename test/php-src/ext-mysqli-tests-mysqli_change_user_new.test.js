// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_change_user_new.phpt
  it("mysqli_change_user(), MySQL 5.6+", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp\t= NULL;\n    $link\t= NULL;\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    /* Pre 5.6: link remains useable */\n    if (false !== ($tmp = @mysqli_change_user($link, $user . '_unknown_really', $passwd . 'non_empty', $db)))\n        printf(\"[002] Expecting false, got %s/%s\\n\", gettype($tmp), $tmp);\n    if (!$res = mysqli_query($link, 'SELECT 1 AS _one'))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    else\n        var_dump($res->fetch_assoc());\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
