// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_windows.phpt
  it("Preloading is not supported on Windows", function () {
    expect(parser.parseCode("Unreachable")).toMatchSnapshot();
  });
});
