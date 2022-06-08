// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug69972.phpt
  it("Bug #69972 (Use-after-free vulnerability in sqlite3SafetyCheckSickOrOk())", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\necho \"SELECTING from invalid table\\n\";\n$result = $db->query(\"SELECT * FROM non_existent_table\");\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n// Trigger the use-after-free\necho \"Error Code: \" . $db->lastErrorCode() . \"\\n\";\necho \"Error Msg: \" . $db->lastErrorMsg() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
