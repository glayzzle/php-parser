// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug78563_final.phpt
  it("Bug #78563: parsers should not be extendable", function () {
    expect(parser.parseCode("<?php\nclass Dummy extends Xmlparser {\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
