// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_report_new.phpt
  it("mysqli_report(), change user, MySQL 5.6+", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    require('table.inc');\n    /*\n    Internal macro MYSQL_REPORT_ERROR\n    */\n    mysqli_report(MYSQLI_REPORT_ERROR);\n    mysqli_change_user($link, \"0123456789-10-456789-20-456789-30-456789-40-456789-50-456789-60-456789-70-456789-80-456789-90-456789\", \"password\", $db);\n    mysqli_report(MYSQLI_REPORT_OFF);\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n      printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n        $host, $user, $db, $port, $socket);\n    mysqli_change_user($link, \"This might work if you accept anonymous users in your setup\", \"password\", $db);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
