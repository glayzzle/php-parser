// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_savepoint.phpt
  it("mysqli_savepoint()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[003] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    try {\n        mysqli_savepoint($link, '');\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    if (!mysqli_query($link, 'DROP TABLE IF EXISTS test'))\n        printf(\"[007] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, 'CREATE TABLE test(id INT) ENGINE = InnoDB'))\n        printf(\"[008] Cannot create test table, [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (true !== ($tmp = mysqli_autocommit($link, false)))\n        printf(\"[009] Cannot turn off autocommit, expecting true, got %s/%s\\n\", gettype($tmp), $tmp);\n    /* overrule autocommit */\n    if (true !== ($tmp = mysqli_savepoint($link, 'my')))\n        printf(\"[010] Got %s - [%d] %s\\n\", var_dump($tmp, true), mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_query($link, 'INSERT INTO test(id) VALUES (1)'))\n        printf(\"[011] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    $tmp = mysqli_rollback($link);\n    if ($tmp !== true)\n        printf(\"[012] Expecting boolean/true, got %s/%s\\n\", gettype($tmp), $tmp);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
