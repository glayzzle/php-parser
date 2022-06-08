// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_31_open.phpt
  it("SQLite3::re-initialize object tests", function () {
    expect(parser.parseCode("<?php\ntry {\n  $db = new SQLite3(__DIR__ . '/db1.db');\n  $db->open(__DIR__ . '/db1.db');\n} catch (Exception $ex) {\n  var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
