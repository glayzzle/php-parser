// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/pdo_mysql_connect_charset.phpt
  it("PDO_MYSQL: Defining a connection charset in the DSN", function () {
    expect(parser.parseCode("<?php\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n    /* Connect to mysql to determine the current charset so we can diffinate it */\n    $link \t\t= MySQLPDOTest::factory();\n    $charset \t= $link->query(\"SHOW VARIABLES LIKE 'character_set_connection'\")->fetchObject()->value;\n    /* Make sure that we don't attempt to set the current character set to make this case useful */\n    $new_charset\t= ($charset == 'latin1' ? 'ascii' : 'latin1');\n    /* Done with the original connection, create a second link to test the character set being defined */\n    unset($link);\n    $link \t\t= MySQLPDOTest::factory('PDO', false, null, Array('charset' => $new_charset));\n    $conn_charset \t= $link->query(\"SHOW VARIABLES LIKE 'character_set_connection'\")->fetchObject()->value;\n    if ($charset !== $conn_charset) {\n        echo \"done!\\n\";\n    } else {\n        echo \"failed!\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
