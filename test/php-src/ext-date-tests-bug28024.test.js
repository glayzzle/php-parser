// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug28024.phpt
  it("Bug #28024 (Changed behavior of strtotime())", function () {
    expect(parser.parseCode("<?php\n    echo strtotime(\"17:00 2004-01-01\"), \"\\n\";\n    echo date(\"Y-m-d H:i:s T\", strtotime(\"17:00 2004-01-01\"));\n?>")).toMatchSnapshot();
  });
});
