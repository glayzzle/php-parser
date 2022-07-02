// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyname_basic003.phpt
  it("Test gethostbyname() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gethostbyname() : basic functionality ***\\n\";\necho gethostbyname(\"localhost\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
