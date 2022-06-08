// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug79877.phpt
  it("Bug #79877 (getimagesize function silently truncates after a null byte)", function () {
    expect(parser.parseCode("<?php\nvar_dump(getimagesize(\"/tmp/a.png\\0xx\"));\n?>")).toMatchSnapshot();
  });
});
