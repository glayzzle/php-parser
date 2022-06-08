// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug74021.phpt
  it("Bug #74021 (fetch_array broken data. Data more then MEDIUMBLOB)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$link->query('SET @@global.max_allowed_packet = 67108864');\n$link->close();\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = $link->query(\"SELECT RPAD('1',9000000,'1') as a,RPAD('1',9000000,'1') as b\");\n$r = $res->fetch_array();\nvar_dump(md5($r['a']));\nvar_dump(md5($r['b']));\n?>")).toMatchSnapshot();
  });
});
