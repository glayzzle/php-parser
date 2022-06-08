// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_createfunction_002.phpt
  it("PDO_sqlite: Testing sqliteCreateFunction() produces warning when\nun-callable function passed", function () {
    expect(parser.parseCode("<?php\n$db = new PDO( 'sqlite::memory:');\ntry {\n    $db->sqliteCreateFunction('bar-alias', 'bar');\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
