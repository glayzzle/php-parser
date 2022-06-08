// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_33_load_extension_param.phpt
  it("SQLite3::loadExtension with empty extension test", function () {
    expect(parser.parseCode("<?php\n$db = new SQLite3(':memory:');\ntry {\n  $db->loadExtension(\"\");\n} catch (Extension $ex) {\n  var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
