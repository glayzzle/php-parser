// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/bug72668.phpt
  it("Bug #72668 (Spurious warning when exception is thrown in user defined function)", function () {
    expect(parser.parseCode("<?php\nfunction my_udf_md5($string) {\n    throw new \\Exception(\"test exception\\n\");\n}\n$db = new SQLite3(':memory:');\n$db->createFunction('my_udf_md5', 'my_udf_md5');\ntry {\n    $result = $db->query('SELECT my_udf_md5(\"test\")');\n    var_dump($result);\n}\ncatch(\\Exception $e) {\n    echo \"Exception: \".$e->getMessage();\n}\ntry {\n    $result = $db->querySingle('SELECT my_udf_md5(\"test\")');\n    var_dump($result);\n}\ncatch(\\Exception $e) {\n    echo \"Exception: \".$e->getMessage();\n}\n$statement = $db->prepare('SELECT my_udf_md5(\"test\")');\ntry {\n    $result = $statement->execute();\n    var_dump($result);\n}\ncatch(\\Exception $e) {\n    echo \"Exception: \".$e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
