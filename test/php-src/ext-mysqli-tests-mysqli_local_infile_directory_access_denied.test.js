// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_local_infile_directory_access_denied.phpt
  it("mysqli.local_infile_directory access denied", function () {
    expect(parser.parseCode("<?php\n\trequire_once(\"connect.inc\");\n\tif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n\t\tprintf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n\t}\n\tif (!$link->query(\"DROP TABLE IF EXISTS test\")) {\n\t\tprintf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\tif (!$link->query(\"CREATE TABLE test (id INT UNSIGNED NOT NULL PRIMARY KEY) ENGINE=\" . $engine)) {\n\t\tprintf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\t$filepath = str_replace('\\\\', '/', __DIR__.'/foo/foo.data');\n\tif (!$link->query(\"LOAD DATA LOCAL INFILE '\".$filepath.\"' INTO TABLE test\")) {\n\t\tprintf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n\t} else {\n\t\tprintf(\"[005] bug! should not happen - access denied expected\\n\");\n\t}\n\t$link->close();\n\techo \"done\";\n?>")).toMatchSnapshot();
  });
});
