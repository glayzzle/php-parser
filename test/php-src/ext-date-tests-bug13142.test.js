// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug13142.phpt
  it("Bug #13142 (strtotime handling of \"M d H:i:s Y\" format)", function () {
    expect(parser.parseCode("<?php\nif (date('T') == 'GMT') {\n    putenv(\"TZ=EST5EDT4,M4.1.0,M10.5.0\");\n}\necho date(\"r\\n\", strtotime(\"Sep 04 16:39:45 2001\"));\necho date(\"r\\n\", strtotime(\"Sep 04 2001 16:39:45\"));\n?>")).toMatchSnapshot();
  });
});
