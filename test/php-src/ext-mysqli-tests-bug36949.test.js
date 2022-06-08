// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug36949.phpt
  it("Bug #36949 (invalid internal mysqli objects dtor)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\nclass A {\n    private $mysqli;\n    public function __construct() {\n        global $user, $host, $passwd, $db, $port, $socket;\n        $this->mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket);\n        $result = $this->mysqli->query(\"SELECT NOW() AS my_time FROM DUAL\");\n        $row = $result->fetch_object();\n        echo $row->my_time.\"<br>\\n\";\n        $result->close();\n    }\n    public function __destruct() {\n        $this->mysqli->close();\n    }\n}\nclass B {\n    private $mysqli;\n    public function __construct() {\n        global $user, $host, $passwd, $db, $port, $socket;\n        $this->mysqli = new mysqli($host, $user, $passwd, $db, $port, $socket);\n        $result = $this->mysqli->query(\"SELECT NOW() AS my_time FROM DUAL\");\n        $row = $result->fetch_object();\n        echo $row->my_time.\"<br>\\n\";\n        $result->close();\n    }\n    public function __destruct() {\n        $this->mysqli->close();\n    }\n}\n$A = new A();\n$B = new B();\n?>")).toMatchSnapshot();
  });
});
