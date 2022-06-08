// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_02_open.phpt
  it("SQLite3::open test, testing for function parameters", function () {
    expect(parser.parseCode("<?php\ntry {\n  $db = new SQLite3();\n} catch (TypeError $e) {\n  var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
