// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_uninitialized.phpt
  it("Uninitialized PDO objects", function () {
    expect(parser.parseCode("<?php\nclass MyPDO extends PDO {\n    public function __construct() {}\n}\nclass MyPDOStatement extends PDOStatement {\n    public function __construct() {}\n}\n$pdo = new MyPDO;\ntry {\n    $pdo->query(\"foo\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$stmt = new MyPDOStatement;\ntry {\n    $stmt->fetch();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$stmt = new MyPDOStatement;\ntry {\n    foreach ($stmt as $row) {}\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
