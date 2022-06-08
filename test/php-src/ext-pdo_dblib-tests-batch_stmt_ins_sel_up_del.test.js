// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/batch_stmt_ins_sel_up_del.phpt
  it("PDO_DBLIB: driver supports a batch of queries containing SELECT, INSERT, UPDATE statements", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n$stmt = $db->query(\n\"create table #php_pdo(id int);\" .\n\"insert into #php_pdo values(1), (2), (3);\" .\n\"select * from #php_pdo;\" .\n\"update #php_pdo set id = 4;\" .\n\"delete from #php_pdo;\" .\n\"select * from #php_pdo;\" .\n\"drop table #php_pdo;\"\n);\n// check results from the create table\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the first insert\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the select\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the update\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the delete\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the select\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the drop\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check that there are no more results\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n?>")).toMatchSnapshot();
  });
});
