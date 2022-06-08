// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_dblib/tests/batch_stmt_ins_exec.phpt
  it("PDO_DBLIB: driver supports a batch of queries containing SELECT, INSERT, UPDATE, EXEC statements", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/config.inc';\n// creating a proc need to be a statement in it's own batch, so we need to do a little setup first\n$db->query(\"create table #php_pdo(id int); \");\n$db->query(\n\"create proc php_pdo_exec_select_proc as \" .\n\"begin \" .\n\"  insert into #php_pdo values(2), (3), (4); \" .\n\"  select * from #php_pdo; \" .\n\"end; \"\n);\n// now lets get some results\n$stmt = $db->query(\n\"insert into #php_pdo values(1); \" .\n\"exec php_pdo_exec_select_proc; \" .\n\"drop table #php_pdo; \" .\n\"drop procedure php_pdo_exec_select_proc; \");\n// check results from the insert\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the exec\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the drop table\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check results from the drop procedure\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n// check that there are no more results\nvar_dump($stmt->rowCount());\nvar_dump($stmt->nextRowset());\n?>")).toMatchSnapshot();
  });
});
