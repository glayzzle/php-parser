// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug74547.phpt
  it("Bug #74547 mysqli::change_user() doesn't accept null as $database argument w/strict_types", function () {
    expect(parser.parseCode("<?php\n    declare(strict_types=1);\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n        printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n            $host, $user, $db, $port, $socket);\n    var_dump(mysqli_change_user($link, $user, $passwd, NULL));\n    mysqli_close($link);\n?>")).toMatchSnapshot();
  });
});
