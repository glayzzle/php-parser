// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_39_toggleExtended.phpt
  it("SQLite3 enable Extended Error Result Codes ", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$db->query(\"CREATE TABLE dog ( id INTEGER PRIMARY KEY, name TEXT, annoying INTEGER )\");\necho \"Inserting first time which should succeed\" . PHP_EOL;\n$result = $db->query(\"INSERT INTO dog VALUES (1, 'Annoying Dog', 1)\");\necho \"First Error Code: \" . $db->lastErrorCode() . PHP_EOL;\necho \"Inserting second time which should fail\" . PHP_EOL;\n$result = $db->query(\"INSERT INTO dog VALUES (1, 'Annoying Dog', 1)\");\necho \"Second Error Code: \" . $db->lastErrorCode() . PHP_EOL;\necho \"Toggling extended error codes and re-inserting a third time\" . PHP_EOL;\n$db->enableExtendedResultCodes(true);\n$result = $db->query(\"INSERT INTO DOG VALUES (1, 'Annoying Dog', 1)\");\necho \"Third (Extended) Error Code: \" . $db->lastErrorCode() . PHP_EOL;\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\" . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
