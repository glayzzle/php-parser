// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_15_open_error.phpt
  it("SQLite3::open error test", function () {
    expect(parser.parseCode("<?php\n$unreadable = __DIR__ . '/unreadable.db';\ntouch($unreadable);\nchmod($unreadable,  0200);\ntry {\n    $db = new SQLite3($unreadable);\n} catch (Exception $e) {\n    echo $e . \"\\n\";\n}\necho \"Done\\n\";\nunlink($unreadable);\n?>")).toMatchSnapshot();
  });
});
