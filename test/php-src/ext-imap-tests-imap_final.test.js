// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_final.phpt
  it("Check that IMAP\\Connection is declared final", function () {
    expect(parser.parseCode("<?php\nclass T extends IMAP\\Connection {}")).toMatchSnapshot();
  });
});
