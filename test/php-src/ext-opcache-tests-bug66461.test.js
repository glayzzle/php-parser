// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66461.phpt
  it("Bug #66461 (PHP crashes if opcache.interned_strings_buffer=0)", function () {
    expect(parser.parseCode("<?php\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
