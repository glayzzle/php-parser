// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_set_opt.phpt
  it("mysqli_set_opt()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $link = mysqli_init();\n    // print \"run_tests.php don't fool me with your 'ungreedy' expression '.+?'!\\n\";\n    var_dump(mysqli_set_opt($link, MYSQLI_READ_DEFAULT_GROUP, 'extra_my.cnf'));\n    var_dump(mysqli_set_opt($link, MYSQLI_READ_DEFAULT_FILE, 'extra_my.cnf'));\n    var_dump(mysqli_set_opt($link, MYSQLI_OPT_CONNECT_TIMEOUT, 10));\n    var_dump(mysqli_set_opt($link, MYSQLI_OPT_LOCAL_INFILE, 1));\n    var_dump(mysqli_set_opt($link, MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT=0'));\n    var_dump(my_mysqli_real_connect($link, $host, $user, $passwd, $db, $port, $socket));\n    var_dump(mysqli_set_opt($link, MYSQLI_READ_DEFAULT_GROUP, 'extra_my.cnf'));\n    var_dump(mysqli_set_opt($link, MYSQLI_READ_DEFAULT_FILE, 'extra_my.cnf'));\n    var_dump(mysqli_set_opt($link, MYSQLI_OPT_CONNECT_TIMEOUT, 10));\n    var_dump(mysqli_set_opt($link, MYSQLI_OPT_LOCAL_INFILE, 1));\n    var_dump(mysqli_set_opt($link, MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT=0'));\n    var_dump(mysqli_set_opt($link, MYSQLI_CLIENT_SSL, 'not an mysqli_option'));\n    mysqli_close($link);\n    try {\n        mysqli_set_opt($link, MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT=1');\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
