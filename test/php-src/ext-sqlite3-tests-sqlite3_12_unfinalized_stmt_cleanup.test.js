// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_12_unfinalized_stmt_cleanup.phpt
  it("SQLite3::query Unfinalized statement tests", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT * FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n    /* Only read one row and break */\n    break;\n}\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Check db was closed\\n\";\ntry {\n    var_dump($results->numColumns());\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
