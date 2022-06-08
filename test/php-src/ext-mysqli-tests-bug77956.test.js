// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug77956.phpt
  it("ensure an error is returned when mysqli.allow_local_infile is off", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    if (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n        printf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n    }\n    if (!$link->query(\"DROP TABLE IF EXISTS test\")) {\n        printf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n    }\n    if (!$link->query(\"CREATE TABLE test (dump1 INT UNSIGNED NOT NULL PRIMARY KEY) ENGINE=\" . $engine)) {\n        printf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n    }\n    if (FALSE == file_put_contents('bug77956.data', \"waa? meukee!\"))\n        printf(\"[004] Failed to create CVS file\\n\");\n    if (!$link->query(\"SELECT 1 FROM DUAL\"))\n        printf(\"[005] [%d] %s\\n\", $link->errno, $link->error);\n    if (!$link->query(\"LOAD DATA LOCAL INFILE 'bug77956.data' INTO TABLE test\")) {\n        printf(\"[006] [%d] %s\\n\", $link->errno, $link->error);\n        echo \"done\";\n    } else {\n        echo \"bug\";\n    }\n    $link->close();\n?>")).toMatchSnapshot();
  });
});
