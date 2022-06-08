// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_prepare_no_object.phpt
  it("mysqli_prepare() - no object on failure", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    if (false !== ($tmp = mysqli_prepare($link, false)))\n        printf(\"[001] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), (is_object($tmp) ? var_dump($tmp, true) : $tmp));\n    printf(\"a) [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (false !== ($tmp = mysqli_prepare($link, '')))\n        printf(\"[002] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), (is_object($tmp) ? var_dump($tmp, true) : $tmp));\n    printf(\"b) [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    mysqli_close($link);\n    if (!$mysqli = new my_mysqli($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (false !== ($tmp = $mysqli->prepare(false)))\n        printf(\"[004] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), (is_object($tmp) ? var_dump($tmp, true) : $tmp));\n    printf(\"c) [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    if (false !== ($tmp = $mysqli->prepare('')))\n        printf(\"[005] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), (is_object($tmp) ? var_dump($tmp, true) : $tmp));\n    printf(\"c) [%d] %s\\n\", $mysqli->errno, $mysqli->error);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
