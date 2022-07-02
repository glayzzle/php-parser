// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/closelog_basic.phpt
  it("Test closelog() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing closelog() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing closelog() function with Zero arguments --\\n\";\nvar_dump( closelog() );\n?>")).toMatchSnapshot();
  });
});
