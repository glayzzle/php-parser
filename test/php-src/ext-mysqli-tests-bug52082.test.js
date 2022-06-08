// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug52082.phpt
  it("Bug #52082 (character_set_client & character_set_connection reset after mysqli_change_user)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $link = mysqli_init();\n    $link->options(MYSQLI_SET_CHARSET_NAME, \"latin2\");\n    if (!my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket)) {\n        die(\"can't connect\");\n    }\n    var_dump($link->query(\"show variables like 'character_set_client'\")->fetch_row());\n    var_dump($link->query(\"show variables like 'character_set_connection'\")->fetch_row());\n    $link->change_user($user, $passwd, $db);\n    var_dump($link->query(\"show variables like 'character_set_client'\")->fetch_row());\n    var_dump($link->query(\"show variables like 'character_set_connection'\")->fetch_row());\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
