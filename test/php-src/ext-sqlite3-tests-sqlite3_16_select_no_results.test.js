// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_16_select_no_results.phpt
  it("SQLite3::query SELECT with no results", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
