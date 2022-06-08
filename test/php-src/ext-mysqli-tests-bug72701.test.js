// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug72701.phpt
  it("Bug #72701 mysqli_get_host_info() wrong output", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$con = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\nif (mysqli_connect_errno()) {\n    echo \"Failed to connect to MySQL: \" . mysqli_connect_error();\n}\nvar_dump(preg_match(\",(127.0.0.1|localhost) via .*,i\", mysqli_get_host_info($con)));\nmysqli_close($con);\n?>")).toMatchSnapshot();
  });
});
