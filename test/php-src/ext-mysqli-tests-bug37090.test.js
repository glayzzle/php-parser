// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug37090.phpt
  it("Bug #37090 (mysqli_set_charset return code)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n    $cs = array();\n    $cs[] = $mysql->set_charset(\"latin1\");\n    $cs[] = $mysql->character_set_name();\n    $cs[] = $mysql->set_charset(\"utf8\");\n    $cs[] = $mysql->character_set_name();\n    $cs[] = $mysql->set_charset(\"notdefined\");\n    $cs[] = $mysql->character_set_name();\n    var_dump($cs);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
