// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/015.phpt
  it("use_trans_sid should not affect SID", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"test015\");\nsession_start();\n?>\n<a href=\"/link?<?php echo SID; ?>\">\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
