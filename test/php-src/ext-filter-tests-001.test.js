// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/001.phpt
  it("Simple GET test", function () {
    expect(parser.parseCode("<?php echo $_GET['a']; ?>")).toMatchSnapshot();
  });
});
