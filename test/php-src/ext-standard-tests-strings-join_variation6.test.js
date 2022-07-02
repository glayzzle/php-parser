// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/join_variation6.phpt
  it("Test join() function : usage variations - binary safe", function () {
    expect(parser.parseCode("<?php\n/*\n * check the working of join() when given binary input given\n*/\necho \"*** Testing join() : usage variationsi - binary safe ***\\n\";\n$glues = array(\n  \",\".chr(0).\" \",\n  \", \"\n);\n$pieces = array(\"Red\", \"Green\", \"White\", 1);\nvar_dump( join($glues[0], $pieces) );\nvar_dump( join($glues[1], $pieces) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
