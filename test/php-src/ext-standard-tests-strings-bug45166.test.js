// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug45166.phpt
  it("Bug #45166 (substr() )", function () {
    expect(parser.parseCode("<?php\n    echo substr('cd', -3) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
