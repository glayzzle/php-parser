// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/020.phpt
  it("rewriter uses arg_separator.output for modifying URLs", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"test020\");\nsession_start();\n?>\n<a href=\"link.php?a=b\">\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
