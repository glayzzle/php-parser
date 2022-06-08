// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_enable_exceptions.phpt
  it("SQLite3::enableExceptions test", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\nvar_dump($db->enableExceptions(true));\ntry{\n    $db->query(\"SELECT * FROM non_existent_table\");\n} catch(Exception $e) {\n    echo $e->getMessage().PHP_EOL;\n}\nvar_dump($db->enableExceptions(false));\n$db->query(\"SELECT * FROM non_existent_table\");\necho \"Closing database\\n\";\nvar_dump($db->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
