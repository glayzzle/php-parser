// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug_44159_sqlite_version.phpt
  it("PDO Common: Bug #44159: SQLite variant", function () {
    expect(parser.parseCode("<?php\n$pdo = new PDO(\"sqlite:\".__DIR__.\"/foo.db\");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\ntry {\n    var_dump($pdo->setAttribute(PDO::NULL_TO_STRING, NULL));\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\nvar_dump($pdo->setAttribute(PDO::NULL_TO_STRING, 1));\ntry {\n    var_dump($pdo->setAttribute(PDO::NULL_TO_STRING, 'nonsense'));\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n@unlink(__DIR__.\"/foo.db\");\n?>")).toMatchSnapshot();
  });
});
