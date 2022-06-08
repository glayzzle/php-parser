// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_get_info_deprecations.phpt
  it("Deprecated messages for mysqli::get_client_info() method", function () {
    expect(parser.parseCode("<?php\nrequire 'connect.inc';\nif (!$mysqli = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n    printf(\"Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n        $host, $user, $db, $port, $socket);\n    exit(1);\n}\nprintf(\"client_info = '%s'\\n\", $mysqli->get_client_info());\nprintf(\"client_info = '%s'\\n\", mysqli_get_client_info($mysqli));\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
