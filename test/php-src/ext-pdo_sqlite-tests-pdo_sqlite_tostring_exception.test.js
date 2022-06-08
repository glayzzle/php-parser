// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/pdo_sqlite_tostring_exception.phpt
  it("__toString() exception during PDO Sqlite parameter binding", function () {
    expect(parser.parseCode("<?php\nclass throws {\n    function __toString() {\n        throw new Exception(\"Sorry\");\n    }\n}\n$db = new PDO('sqlite::memory:');\n$db->exec('CREATE TABLE t(id int, v varchar(255))');\n$stmt = $db->prepare('INSERT INTO t VALUES(:i, :v)');\n$param1 = 1234;\n$stmt->bindValue('i', $param1);\n$param2 = \"foo\";\n$stmt->bindParam('v', $param2);\n$param2 = new throws;\ntry {\n    $stmt->execute();\n} catch (Exception $e) {\n    echo \"Exception thrown ...\\n\";\n}\ntry {\n    $stmt->execute();\n} catch (Exception $e) {\n    echo \"Exception thrown ...\\n\";\n}\n$query = $db->query(\"SELECT * FROM t\");\nwhile ($row = $query->fetch(PDO::FETCH_ASSOC)) {\n    print_r($row);\n}\n?>")).toMatchSnapshot();
  });
});
