// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_20_error.phpt
  it("SQLite3 error functions", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\necho \"SELECTING from invalid table\\n\";\n$result = $db->query(\"SELECT * FROM non_existent_table\");\nif (!$result) {\n    echo \"Error Code: \" . $db->lastErrorCode() . \"\\n\";\n    echo \"Error Msg: \" . $db->lastErrorMsg() . \"\\n\";\n}\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
