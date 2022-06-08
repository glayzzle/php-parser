// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/018.phpt
  it("rewriter correctly handles attribute names which contain dashes", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_id(\"test018\");\nsession_start();\n?>\n<form accept-charset=\"ISO-8859-15, ISO-8859-1\" action=url.php>\n<?php\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
