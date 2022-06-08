// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/odbc/tests/bug78473.phpt
  it("Bug #78473 (odbc_close() closes arbitrary resources)", function () {
    expect(parser.parseCode("<?php\ntry {\n    odbc_close(STDIN);\n} catch (TypeError $err) {\n    echo $err->getMessage(), PHP_EOL;\n}\nvar_dump(STDIN);\n?>")).toMatchSnapshot();
  });
});
