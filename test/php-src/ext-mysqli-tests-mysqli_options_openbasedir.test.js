// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_options_openbasedir.phpt
  it("mysqli_options() - MYSQLI_OPT_LOCAL_INFILE and open_basedir", function () {
    expect(parser.parseCode("<?php\nrequire_once('connect.inc');\nini_set(\"open_basedir\", __DIR__);\nif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket))\n    printf(\"[001] Cannot connect, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\nif ($IS_MYSQLND) {\n    if (true !== mysqli_options($link, MYSQLI_OPT_LOCAL_INFILE, 1))\n        printf(\"[002] Can not set MYSQLI_OPT_LOCAL_INFILE although open_basedir is set!\\n\");\n} else {\n    if (false !== mysqli_options($link, MYSQLI_OPT_LOCAL_INFILE, 1))\n        printf(\"[002] Can set MYSQLI_OPT_LOCAL_INFILE although open_basedir is set!\\n\");\n}\nmysqli_close($link);\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
