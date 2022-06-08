// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug41600.phpt
  it("Bug #41600 (url rewriter tags doesn't work with namespaced tags)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"bug41600\");\nsession_start();\n?>\n<a href=\"link.php?a=b\">\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
