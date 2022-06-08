// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug53503.phpt
  it("Bug #53503 (mysqli::query returns false after successful LOAD DATA query)", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    if (!$link->query(\"DROP TABLE IF EXISTS test\")) {\n        printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n    }\n    if (!$link->query(\"CREATE TABLE test (dump1 INT UNSIGNED NOT NULL PRIMARY KEY) ENGINE=\" . $engine)) {\n        printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n    }\n    if (FALSE == file_put_contents('bug53503.data', \"1\\n2\\n3\\n\"))\n        printf(\"[004] Failed to create CVS file\\n\");\n    if (!$link->query(\"SELECT 1 FROM DUAL\"))\n        printf(\"[005] [%d] %s\\n\", $link->errno, $link->error);\n    if (!$link->query(\"LOAD DATA LOCAL INFILE 'bug53503.data' INTO TABLE test\")) {\n        printf(\"[006] [%d] %s\\n\", $link->errno, $link->error);\n        echo \"bug\";\n    } else {\n        echo \"done\";\n    }\n    $link->close();\n?>")).toMatchSnapshot();
  });
});
