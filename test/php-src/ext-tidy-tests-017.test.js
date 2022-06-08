// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/017.phpt
  it("The Tidy Output Buffer Filter", function () {
    expect(parser.parseCode("<?php ob_start(\"ob_tidyhandler\"); ?>\n<B>testing</I>")).toMatchSnapshot();
  });
});
