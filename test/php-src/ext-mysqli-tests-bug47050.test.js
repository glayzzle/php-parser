// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug47050.phpt
  it("Bug #47050 (mysqli_poll() modifies improper variables)", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    $link1 = my_mysqli_connect($host, $user, $passwd, null, $port, $socket);\n    mysqli_select_db($link1, $db);\n    $link1->query(\"SELECT 'test'\", MYSQLI_ASYNC);\n    $all_links = array($link1);\n    $links = $errors = $reject = $all_links;\n    mysqli_poll($links, $errors, $reject, 1);\n    echo \"links: \",     sizeof($links), \"\\n\";\n    echo \"errors: \",    sizeof($errors), \"\\n\";\n    echo \"reject: \",    sizeof($reject), \"\\n\";\n    echo \"all_links: \", sizeof($all_links), \"\\n\";\n    $link1->close();\n?>")).toMatchSnapshot();
  });
});
