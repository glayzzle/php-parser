// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug28817.phpt
  it("Bug #28817 (problems with properties declared in the class extending MySQLi)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    class my_mysql extends mysqli {\n        public $p_test;\n        function __construct() {\n            $this->p_test[] = \"foo\";\n            $this->p_test[] = \"bar\";\n        }\n    }\n    $mysql = new my_mysql();\n    var_dump($mysql->p_test);\n    try {\n        $mysql->errno;\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    $mysql->connect($host, $user, $passwd, $db, $port, $socket);\n    $mysql->select_db(\"nonexistingdb\");\n    var_dump($mysql->errno > 0);\n    $mysql->close();\n?>")).toMatchSnapshot();
  });
});
