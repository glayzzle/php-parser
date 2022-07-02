// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/gethostbyaddr_basic1.phpt
  it("Test gethostbyaddr() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gethostbyaddr() : basic functionality ***\\n\";\necho gethostbyaddr(\"127.0.0.1\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
