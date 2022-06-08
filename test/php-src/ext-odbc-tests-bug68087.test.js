// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug68087.phpt
  it("odbc_exec(): Getting accurate date data from query", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$id_1_date = '2014-09-23';\n$id_2_date = '2014-09-24';\n$conn = odbc_connect($dsn, $user, $pass);\n@odbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (ID INT, VARCHAR_COL VARCHAR(100), DATE_COL DATE)');\nodbc_exec($conn, \"INSERT INTO FOO(ID, VARCHAR_COL, DATE_COL) VALUES (1, 'hello', '$id_1_date')\");\nodbc_exec($conn, \"INSERT INTO FOO(ID, VARCHAR_COL, DATE_COL) VALUES (2, 'helloagain', '$id_2_date')\");\n$res = odbc_exec($conn, 'SELECT * FROM FOO ORDER BY ID ASC');\nwhile(odbc_fetch_row($res)) {\n    $id = odbc_result($res, \"ID\");\n    $varchar_col = odbc_result($res, \"VARCHAR_COL\");\n    $date = odbc_result($res, \"DATE_COL\");\n    if ($id == 1) {\n        if ($date != $id_1_date) {\n            print \"Date_1 mismatched\\n\";\n        } else {\n            print \"Date_1 matched\\n\";\n        }\n    } else {\n        if ($date != $id_2_date) {\n            print \"Date_2 mismatched\\n\";\n        } else {\n            print \"Date_2 matched\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
