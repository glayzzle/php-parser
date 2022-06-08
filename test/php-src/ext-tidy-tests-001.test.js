// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/001.phpt
  it("Check for tidy presence", function () {
    expect(parser.parseCode("<?php\necho \"tidy extension is available\";\n?>")).toMatchSnapshot();
  });
});
