// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_035.phpt
  it("PDO Common: PDORow + get_parent_class()", function () {
    expect(parser.parseCode("<?php\n$db = new PDO('sqlite::memory:');\n$db->exec('CREATE TABLE test (id int)');\n$db->exec('INSERT INTO test VALUES (23)');\n$stmt = $db->prepare('SELECT id FROM test');\n$stmt->execute();\n$result = $stmt->fetch(PDO::FETCH_LAZY);\necho get_class($result), \"\\n\";\nvar_dump(get_parent_class($result));\ntry {\n    $result->foo = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $result[0] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($result->foo);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($result[0]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
