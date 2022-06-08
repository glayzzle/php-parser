// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/exception_from_toString.phpt
  it("Check that exceptions from __toString() are handled correctly", function () {
    expect(parser.parseCode("<?php\nclass throws {\n    function __toString() {\n        throw new Exception(\"Sorry\");\n    }\n}\n$db = new sqlite3(':memory:');\n$db->exec('CREATE TABLE t(id int, v varchar(255))');\n$stmt = $db->prepare('INSERT INTO t VALUES(:i, :v)');\n$stmt->bindValue('i', 1234);\n$stmt->bindValue('v', new throws);\ntry {\n    $stmt->execute();\n} catch (Exception $e) {\n    echo \"Exception thrown ...\\n\";\n}\ntry {\n    $stmt->execute();\n} catch (Exception $e) {\n    echo \"Exception thrown ...\\n\";\n}\n$query = $db->query(\"SELECT * FROM t\");\nwhile ($row = $query->fetchArray(SQLITE3_ASSOC)) {\n    print_r($row);\n}\n?>")).toMatchSnapshot();
  });
});
