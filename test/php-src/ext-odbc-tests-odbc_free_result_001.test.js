// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_free_result_001.phpt
  it("odbc_free_result(): Basic test", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\nodbc_exec($conn, 'CREATE DATABASE odbcTEST');\nodbc_exec($conn, 'CREATE TABLE FOO (TEST INT NOT NULL)');\nodbc_exec($conn, 'ALTER TABLE FOO ADD PRIMARY KEY (TEST)');\nodbc_exec($conn, 'INSERT INTO FOO VALUES (1)');\nodbc_exec($conn, 'INSERT INTO FOO VALUES (2)');\n$res = odbc_exec($conn, 'SELECT * FROM FOO');\nvar_dump(odbc_fetch_row($res));\nvar_dump(odbc_result($res, 'test'));\nvar_dump(odbc_free_result($res));\ntry {\n    var_dump(odbc_free_result($conn));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(odbc_fetch_row($res));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(odbc_result($res, 'test'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
