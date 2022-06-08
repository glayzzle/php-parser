// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_19_columninfo.phpt
  it("SQLite3 columnType and columnName", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$result = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\nwhile ($row = $result->fetchArray(SQLITE3_NUM)) {\n    $totalColumns = $result->numColumns();\n    for ($i = 0; $i < $totalColumns; $i++) {\n        echo \"Name: \" . $result->columnName($i) . \" - Type: \" . $result->columnType($i) . \"\\n\";\n    }\n}\n$result->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
