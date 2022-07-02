// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug79254.phpt
  it("Bug #79254 (getenv() w/o arguments not showing changes)", function () {
    expect(parser.parseCode("<?php\n$old = getenv();\nvar_dump(getenv(\"PHP_BUG_79254\", true));\nputenv(\"PHP_BUG_79254=BAR\");\n$new = getenv();\nvar_dump(array_diff($new, $old));\nvar_dump(getenv(\"PHP_BUG_79254\", true));\n?>")).toMatchSnapshot();
  });
});
