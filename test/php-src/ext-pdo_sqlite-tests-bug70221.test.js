// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug70221.phpt
  it("Bug #70221 (persistent sqlite connection + custom function segfaults)", function () {
    expect(parser.parseCode("<?php\n$dbfile = __DIR__ . '/test.sqlite';\n$db = new PDO('sqlite:'.$dbfile, null, null, array(PDO::ATTR_PERSISTENT => true));\nfunction _test() { return 42; }\n$db->sqliteCreateFunction('test', '_test', 0);\nprint(\"Everything is fine, no exceptions here\\n\");\nunset($db);\n?>")).toMatchSnapshot();
  });
});
