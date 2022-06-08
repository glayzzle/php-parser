// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/072.phpt
  it("mysqli warning_count, get_warnings", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $mysql->query(\"DROP TABLE IF EXISTS not_exists\");\n    var_dump($mysql->warning_count);\n    $w = $mysql->get_warnings();\n    var_dump($w->errno);\n    var_dump($w->message);\n    var_dump($w->sqlstate);\n    $mysql->close();\n    echo \"done!\"\n?>")).toMatchSnapshot();
  });
});
