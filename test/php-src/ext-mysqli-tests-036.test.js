// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/036.phpt
  it("function test: mysqli_insert_id()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, $db);\n    mysqli_query($link, \"DROP TABLE IF EXISTS t036\");\n    mysqli_query($link, \"CREATE TABLE t036 (a bigint not null auto_increment primary key, b varchar(10)) ENGINE = \" . $engine);\n    mysqli_query($link, \"INSERT INTO t036 (b) VALUES ('foo1')\");\n    $test[] = mysqli_insert_id($link);\n    /* we have to insert more values, cause lexer sets auto_increment to max_int\n       see mysql bug #54. So we don't check for the value, only for type (which must\n       be type string)\n    */\n    mysqli_query($link, \"ALTER TABLE t036 AUTO_INCREMENT=9999999999999998\");\n    mysqli_query($link, \"INSERT INTO t036 (b) VALUES ('foo2')\");\n    mysqli_query($link, \"INSERT INTO t036 (b) VALUES ('foo3')\");\n    mysqli_query($link, \"INSERT INTO t036 (b) VALUES ('foo4')\");\n    $x = mysqli_insert_id($link);\n    $test[] = is_string($x);\n    var_dump($test);\n    mysqli_query($link, \"DROP TABLE IF EXISTS t036\");\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
