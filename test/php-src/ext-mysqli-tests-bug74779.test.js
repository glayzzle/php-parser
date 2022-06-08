// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug74779.phpt
  it("Bug #74779 (x() and y() truncating floats to integers)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\nif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n    printf(\"[001] Cannot connect to the server using host=%s, user=%s, passwd=***, dbname=%s, port=%s, socket=%s\\n\",\n        $host, $user, $db, $port, $socket);\n}\nif (!setlocale(LC_NUMERIC, \"de_DE\", \"de_DE.UTF-8\", \"de-DE\")) {\n    echo \"[002] Cannot set locale\\n\";\n}\nif (!$link->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true)) {\n    printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n}\nif (!$result = $link->query(\"SELECT ST_Y(Point(56.7, 53.34))\")) {\n    printf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n}\nif (!$array = $result->fetch_array(MYSQLI_ASSOC)) {\n    printf(\"[005] [%d] %s\\n\", $link->errno, $link->error);\n}\nvar_dump($array);\nmysqli_close($link);\n?>")).toMatchSnapshot();
  });
});
