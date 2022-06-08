// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdorow.phpt
  it("Trying instantiate a PDORow object manually", function () {
    expect(parser.parseCode("<?php\nnew PDORow;\n?>")).toMatchSnapshot();
  });
});
