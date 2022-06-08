// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug73800.phpt
  it("Bug #73800 (sporadic segfault with MYSQLI_OPT_INT_AND_FLOAT_NATIVE)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->query('SET @@global.max_allowed_packet = 67108864');\n$link->close();\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);\n$res = $link->query(\"SELECT RPAD('1',9000000,'1') as a,RPAD('1',9000000,'1') as b, 9223372036854775807 as c\");\n$r = $res->fetch_array();\nvar_dump($r['c']);\n?>")).toMatchSnapshot();
  });
});
