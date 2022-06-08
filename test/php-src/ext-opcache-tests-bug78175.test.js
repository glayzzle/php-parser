// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78175.phpt
  it("Bug #78175 (Preloading segfaults at preload time and at runtime)", function () {
    expect(parser.parseCode("OK")).toMatchSnapshot();
  });
});
