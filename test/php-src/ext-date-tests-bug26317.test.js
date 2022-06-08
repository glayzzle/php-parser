// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug26317.phpt
  it("Bug #26317 (military timezone offset signedness)", function () {
    expect(parser.parseCode("<?php\n    echo date(\"Y-m-d H:i:s\\n\", strtotime(\"2003-11-19 16:20:42 Z\"));\n    echo date(\"Y-m-d H:i:s\\n\", strtotime(\"2003-11-19 09:20:42 T\"));\n    echo date(\"Y-m-d H:i:s\\n\", strtotime(\"2003-11-19 19:20:42 C\"));\n?>")).toMatchSnapshot();
  });
});
