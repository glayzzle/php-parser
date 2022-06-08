// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/batch_stmt_ins_up.phpt
  it("PDO_DBLIB: driver supports multiple queries in a single \\PDO::query() call that doesn't return any rowsets", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->query(\n\"create table #php_pdo(id int);\" .\n\"insert into #php_pdo values(1), (2), (3);\" .\n\"update #php_pdo set id = 1;\" .\n\"insert into #php_pdo values(2);\" .\n\"drop table #php_pdo;\"\n);\n// check results from the create table\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the first insert\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the update\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the second insert\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the drop\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check that there are no more results\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n?>")).toMatchSnapshot();
  });
});
