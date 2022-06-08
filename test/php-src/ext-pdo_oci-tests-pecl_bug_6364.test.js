// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_oci/tests/pecl_bug_6364.phpt
  it("PECL PDO_OCI Bug #6364 (segmentation fault on stored procedure call with OUT binds)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/../../pdo/tests/pdo_test.inc';\n$dbh = PDOTest::factory();\n@$dbh->exec (\"drop table bug_6364_t\");\n$dbh->exec (\"create table bug_6364_t (c1 varchar2(10), c2 varchar2(10), c3 varchar2(10), c4 varchar2(10), c5 varchar2(10))\");\n$dbh->exec (\"create or replace procedure bug_6364_sp(p1 IN varchar2, p2 IN varchar2, p3 IN varchar2, p4 OUT varchar2, p5 OUT varchar2) as begin insert into bug_6364_t (c1, c2, c3) values (p1, p2, p3); p4 := 'val4'; p5 := 'val5'; end;\");\n$stmt = $dbh->prepare(\"call bug_6364_sp('p1','p2','p3',?,?)\");\n$out_param1 = \"a\";\n$out_param2 = \"a\";\n$stmt->bindParam(1, $out_param1,PDO::PARAM_STR, 1024);\n$stmt->bindParam(2, $out_param2,PDO::PARAM_STR, 1024);\n$stmt->execute() or die (\"Execution error: \" . var_dump($dbh->errorInfo()));\nvar_dump($out_param1);\nvar_dump($out_param2);\nforeach ($dbh->query(\"select * from bug_6364_t\") as $row) {\n    var_dump($row);\n}\nprint \"Done\\n\";\n// Cleanup\n$dbh->exec (\"drop procedure bug_6364_sp\");\n$dbh->exec (\"drop table bug_6364_t\");\n?>")).toMatchSnapshot();
  });
});
