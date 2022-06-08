// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug71220.phpt
  it("Bug #71220 (Null pointer deref (segfault) in compact via ob_start)", function () {
    expect(parser.parseCode("<?php\nob_start(\"compact\");\ntry {\n    ob_end_clean();\n} catch (\\Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
