// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug26198.phpt
  it("Bug #26198 (strtotime handling of \"M Y\" and \"Y M\" format)", function () {
    expect(parser.parseCode("<?php\n    date_default_timezone_set(\"GMT\");\n    echo gmdate(\"F Y (Y-m-d H:i:s T)\\n\", strtotime(\"Oct 2001\"));\n    echo gmdate(\"M Y (Y-m-d H:i:s T)\\n\", strtotime(\"2001 Oct\"));\n?>")).toMatchSnapshot();
  });
});
