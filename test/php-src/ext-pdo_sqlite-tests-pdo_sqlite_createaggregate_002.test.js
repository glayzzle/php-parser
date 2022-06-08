// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_createaggregate_002.phpt
  it("PDO_sqlite: Testing invalid callback for sqliteCreateAggregate()", function () {
    expect(parser.parseCode("<?php\n$pdo = new PDO('sqlite::memory:');\ntry {\n    $pdo->sqliteCreateAggregate('foo', 'a', '');\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    $pdo->sqliteCreateAggregate('foo', 'strlen', '');\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
