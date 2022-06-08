// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_08_udf.phpt
  it("SQLite3::createFunction", function () {
    expect(parser.parseCode("<?php\nfunction my_udf_md5($foo)\n{\n    return md5($foo);\n}\nrequire_once(__DIR__ . '/new_db.inc');\ndefine('TIMENOW', time());\necho \"Creating Table\\n\";\nvar_dump($db->exec('CREATE TABLE test (time INTEGER, id STRING)'));\necho \"INSERT into table\\n\";\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'a')\"));\nvar_dump($db->exec(\"INSERT INTO test (time, id) VALUES (\" . TIMENOW . \", 'b')\"));\necho \"CREATING UDF\\n\";\nvar_dump($db->createFunction('my_udf_md5', 'my_udf_md5'));\necho \"SELECTING results\\n\";\n$results = $db->query(\"SELECT my_udf_md5(id) FROM test ORDER BY id ASC\");\nwhile ($result = $results->fetchArray(SQLITE3_NUM))\n{\n    var_dump($result);\n}\n$results->finalize();\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
