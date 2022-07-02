// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/002.phpt
  it("Simple POST Method test", function () {
    expect(parser.parseCode("<?php\necho $_POST['a']; ?>")).toMatchSnapshot();
  });
});
