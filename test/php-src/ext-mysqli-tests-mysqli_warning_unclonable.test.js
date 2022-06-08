// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_warning_unclonable.phpt
  it("Trying to clone mysqli_warning object", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    if (!mysqli_query($link, \"DROP TABLE IF EXISTS test\"))\n        printf(\"[002] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, \"CREATE TABLE test (id SMALLINT)\"))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, \"INSERT INTO test (id) VALUES (1000000)\"))\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!is_object($warning = mysqli_get_warnings($link)) || 'mysqli_warning' != get_class($warning)) {\n        printf(\"[005] Expecting object/mysqli_warning, got %s/%s\\n\", gettype($tmp), (is_object($tmp) ? var_dump($tmp, true) : $tmp));\n    }\n    $warning_clone = clone $warning;\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
