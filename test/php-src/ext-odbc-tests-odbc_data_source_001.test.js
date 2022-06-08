// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/odbc_data_source_001.phpt
  it("odbc_data_source(): Basic test", function () {
    expect(parser.parseCode("<?php\ninclude 'config.inc';\n$conn = odbc_connect($dsn, $user, $pass);\ntry {\n    var_dump(odbc_data_source($conn, NULL));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(odbc_data_source($conn, SQL_FETCH_FIRST));\n?>")).toMatchSnapshot();
  });
});
