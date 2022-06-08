// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_execute_bind_libmysql.phpt
  it("mysqli_stmt_execute() - bind in execute - not supported with libmysql", function () {
    expect(parser.parseCode("<?php\nrequire_once \"connect.inc\";\nrequire 'table.inc';\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\n// first, control case\n$id = 1;\n$abc = 'abc';\n$stmt = $link->prepare('SELECT label, ? AS anon, ? AS num FROM test WHERE id=?');\n$stmt->bind_param('sss', ...[&$abc, 42, $id]);\n$stmt->execute();\n$stmt->bind_result($v1, $v2, $v3);\n$stmt->fetch();\nassert(['label'=>$v1, 'anon'=>$v2, 'num'=>$v3] === ['label'=>'a', 'anon'=>'abc', 'num'=>'42']);\n$stmt = null;\n// 1. same as the control case, but skipping the middle-man (bind_param)\n$stmt = $link->prepare('SELECT label, ? AS anon, ? AS num FROM test WHERE id=?');\ntry {\n    $stmt->execute([&$abc, 42, $id]);\n} catch (ArgumentCountError $e) {\n    echo '[001] '.$e->getMessage().\"\\n\";\n}\n$stmt = null;\nmysqli_close($link);\n?>")).toMatchSnapshot();
  });
});
