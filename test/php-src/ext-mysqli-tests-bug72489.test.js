// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug72489.phpt
  it("Bug #72489 (PHP Crashes When Modifying Array Containing MySQLi Result Data)", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\nif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n    printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n}\nif (!$link->query(\"DROP TABLE IF EXISTS bug72489\")) {\n    printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n}\nif (!$link->query(\"CREATE TABLE bug72489 (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, code VARCHAR(30) NOT NULL)\")) {\n    printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n}\n$seedSQL = \"INSERT INTO bug72489 (`code`) VALUES ('code1'), ('code2'), ('code3');\";\nif (!$link->query($seedSQL)) {\n    printf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n}\n$subRow = array();\nif (!$stmt = $link->prepare(\"SELECT id, code FROM bug72489\")) {\n    printf(\"[005] [%d] %s\\n\", $link->errno, $link->error);\n}\n$stmt->attr_set(MYSQLI_STMT_ATTR_CURSOR_TYPE, MYSQLI_CURSOR_TYPE_READ_ONLY);\nif (!$stmt->bind_result($subRow['id'], $subRow['code']) || !$stmt->execute()) {\n    printf(\"[006] [%d] %s\\n\", $link->errno, $link->error);\n}\nwhile ($stmt->fetch()) {\n    $testArray = array('id' => 1);\n    $subRow['code'] = $testArray;\n}\necho \"Finished 1\\n\";\n$newArray = array();\necho \"Finished 2\\n\";\n?>")).toMatchSnapshot();
  });
});
