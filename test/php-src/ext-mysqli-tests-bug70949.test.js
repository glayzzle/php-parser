// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug70949.phpt
  it("Bug #70949 (SQL Result Sets With NULL Can Cause Fatal Memory Errors)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$mysql = new my_mysqli($host, $user, $passwd, $db, $port, $socket);\n$mysql->query(\"DROP TABLE IF EXISTS bug70949\");\n$mysql->query(\"CREATE TABLE bug70949(name varchar(255))\");\n$mysql->query(\"INSERT INTO bug70949 VALUES ('dummy'),(NULL),('foo'),('bar')\");\n$sql = \"select * from bug70949\";\nif ($stmt = $mysql->prepare($sql))\n{\n    $stmt->attr_set(MYSQLI_STMT_ATTR_CURSOR_TYPE, MYSQLI_CURSOR_TYPE_READ_ONLY);\n    if ($stmt->bind_result($name)) {\n        {\n            if ($stmt->execute())\n            {\n                while ($stmt->fetch())\n                {\n                    var_dump($name);\n                }\n            }\n        }\n        $stmt->free_result();\n        $stmt->close();\n    }\n    $mysql->close();\n}\n?>")).toMatchSnapshot();
  });
});
