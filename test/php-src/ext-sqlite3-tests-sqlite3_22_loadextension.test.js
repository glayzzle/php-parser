// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_22_loadextension.phpt
  it("SQLite3 load extension", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . '/new_db.inc');\n$directory = __DIR__;\ntouch($directory . '/myext.txt');\nvar_dump($db->loadExtension('myext.txt'));\nvar_dump($db->close());\nunlink($directory . '/myext.txt');\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
