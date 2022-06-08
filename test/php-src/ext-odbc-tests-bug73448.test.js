// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug73448.phpt
  it("Bug #73448 odbc_errormsg returns trash, always 513 bytes", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\n$sqlCommandList = array(\n    \"/* empty batch is without error */\",\n    \"/* non existent procedure xy */ execute xy\",\n    \"/* empty batch,error message is not empty */\",\n    \"/* valid select with result */ select * from sys.sysobjects\",\n    \"/* another erroneous query */ SELECT * FROM zwiebelfleisch\",\n    \"/* valid select with result */ select * from sys.sysobjects\",\n);\nforeach ($sqlCommandList as $exampleNumber => $sql) {\n    $r = @odbc_exec($conn, $sql);\n    if (false === $r) {\n        $e = odbc_errormsg($conn);\n        $n = odbc_error($conn);\n        var_dump($sql, $n, $e);\n        echo \"\\n\";\n    }\n    if ($r) {\n        odbc_free_result($r);\n    }\n}\nodbc_close($conn);\n?>")).toMatchSnapshot();
  });
});
