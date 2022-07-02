// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbynamel_basic1.phpt
  it("Test gethostbynamel() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gethostbynamel() : basic functionality ***\\n\";\nvar_dump(gethostbynamel(\"localhost\"));\n?>")).toMatchSnapshot();
  });
});
