// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/060.phpt
  it("mysqli_fetch_object with classes", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    class test_class {\n        function __construct($arg1, $arg2) {\n            echo __METHOD__ . \"($arg1,$arg2)\\n\";\n        }\n    }\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"SET sql_mode=''\");\n    mysqli_query($link,\"DROP TABLE IF EXISTS test_fetch\");\n    mysqli_query($link,\"CREATE TABLE test_fetch(c1 smallint unsigned,\n        c2 smallint unsigned,\n        c3 smallint,\n        c4 smallint,\n        c5 smallint,\n        c6 smallint unsigned,\n        c7 smallint)\");\n    mysqli_query($link, \"INSERT INTO test_fetch VALUES ( -23, 35999, NULL, -500, -9999999, -0, 0)\");\n    $result = mysqli_query($link, \"SELECT * FROM test_fetch\");\n    $test = mysqli_fetch_object($result, 'test_class', array(1, 2));\n    mysqli_free_result($result);\n    var_dump($test);\n    mysqli_close($link);\n    echo \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
