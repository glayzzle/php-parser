// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_allow_local_infile_overrides_local_infile_directory.phpt
  it("mysqli.allow_local_infile overrides mysqli.local_infile_directory", function () {
    expect(parser.parseCode("<?php\n\trequire_once(\"connect.inc\");\n\tif (!$link = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket)) {\n\t\tprintf(\"[001] Connect failed, [%d] %s\\n\", mysqli_connect_errno(), mysqli_connect_error());\n\t}\n\tif (!$link->query(\"DROP TABLE IF EXISTS test\")) {\n\t\tprintf(\"[002] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\tif (!$link->query(\"CREATE TABLE test (id INT UNSIGNED NOT NULL PRIMARY KEY) ENGINE=\" . $engine)) {\n\t\tprintf(\"[003] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\t$filepath = str_replace('\\\\', '/', __DIR__.'/foo/foo.data');\n\tif (!$link->query(\"LOAD DATA LOCAL INFILE '\".$filepath.\"' INTO TABLE test\")) {\n\t\tprintf(\"[004] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\tif ($res = mysqli_query($link, 'SELECT COUNT(id) AS num FROM test')) {\n\t\t$row = mysqli_fetch_assoc($res);\n\t\tmysqli_free_result($res);\n\t\t$row_count = $row['num'];\n\t\t$expected_row_count = 3;\n\t\tif ($row_count != $expected_row_count) {\n\t\t\tprintf(\"[005] %d != %d\\n\", $row_count, $expected_row_count);\n\t\t}\n\t} else {\n\t\tprintf(\"[006] [%d] %s\\n\", $link->errno, $link->error);\n\t}\n\t$link->close();\n\techo \"done\";\n?>")).toMatchSnapshot();
  });
});
