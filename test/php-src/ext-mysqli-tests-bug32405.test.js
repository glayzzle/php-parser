// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug32405.phpt
  it("Bug #32405 (mysqli->fetch() is returning bad data)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    /*** test mysqli_connect 127.0.0.1 ***/\n    $link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n    mysqli_select_db($link, \"test\");\n    mysqli_query($link, \"SET sql_mode=''\");\n    /* two fields are needed. the problem does not occur with 1 field only selected. */\n    $link->query(\"CREATE TABLE test_users(user_id int(10) unsigned NOT NULL auto_increment, login varchar(50) default '', PRIMARY KEY (user_id))\");\n    $link->query('INSERT INTO test_users VALUES (NULL, \"user1\"), (NULL, \"user2\"), (NULL, \"user3\"), (NULL, \"user4\")');\n    if ($stmt = $link->prepare(\"SELECT SQL_NO_CACHE user_id, login FROM test_users\")) {\n            $stmt->execute();\n                $stmt->bind_result($col1, $col2);\n                while ($stmt->fetch()) {\n                    var_dump($col1, $col2);\n            }\n            $stmt->close();\n    }\n    mysqli_query($link,\"DROP TABLE test_users\");\n    mysqli_close($link);\n?>")).toMatchSnapshot();
  });
});
