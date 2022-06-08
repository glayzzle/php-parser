// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug34785.phpt
  it("Bug #34785 (Can not properly subclass mysqli_stmt)", function () {
    expect(parser.parseCode("<?php\n    include (\"connect.inc\");\n    class my_stmt extends mysqli_stmt\n    {\n        public function __construct($link, $query) {\n            parent::__construct($link, $query);\n        }\n    }\n    class my_result extends mysqli_result\n    {\n        public function __construct($link, $query) {\n            parent::__construct($link, $query);\n        }\n    }\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_query($link, \"SET sql_mode=''\");\n    $stmt = new my_stmt($link, \"SELECT 'foo' FROM DUAL\");\n    $stmt->execute();\n    $stmt->bind_result($var);\n    $stmt->fetch();\n    $stmt->close();\n    var_dump($var);\n    mysqli_real_query($link, \"SELECT 'bar' FROM DUAL\");\n    $result = new my_result($link, MYSQLI_STORE_RESULT);\n    $row = $result->fetch_row();\n    $result->close();\n    var_dump($row[0]);\n    mysqli_close($link);\n?>")).toMatchSnapshot();
  });
});
