// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_local_infile_set_on.phpt
  it("enable local infile", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n$res = mysqli_query($link, 'SHOW VARIABLES LIKE \"local_infile\"');\n$row = mysqli_fetch_assoc($res);\necho \"server: \", $row['Value'], \"\\n\";\nmysqli_free_result($res);\nmysqli_close($link);\necho \"connector: \", ini_get(\"mysqli.allow_local_infile\"), \"\\n\";\nprint \"done!\\n\";\n?>")).toMatchSnapshot();
  });
});
