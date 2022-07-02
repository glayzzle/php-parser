// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chr_basic.phpt
  it("Test chr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing chr() : basic functionality ***\\n\";\necho chr(72). chr(101) . chr(108) . chr(108). chr(111); // Hello\necho chr(10); // \"\\n\"\necho \"World\";\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
