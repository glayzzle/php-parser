// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/bug71863.phpt
  it("Bug #71863 Segfault when EXPLAIN with \"Unknown Column\" Error", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"connect.inc\");\n$req = my_mysqli_connect($host, $user, $passwd, $db, $port, $socket);\n// create db and table for test\nmysqli_query($req, \"DROP TABLE IF EXISTS test_bug_71863\") or die(mysqli_error($req));\nmysqli_query($req, \"CREATE TABLE test_bug_71863 (id INT UNSIGNED NOT NULL DEFAULT 0)\") or die(mysqli_error($req));\n// segfault if EXPLAIN + \"Unknown column\" error\nmysqli_query($req, \"EXPLAIN SELECT `id` FROM `test_bug_71863` WHERE `owner_id` = '2' AND `object_id` = '1' AND type = '0'\") or die(mysqli_error($req).\"\\n\");\n?>")).toMatchSnapshot();
  });
});
