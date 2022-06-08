// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_ind.phpt
  it("Various tests that need an opcache_compile_file() indirected preload file", function () {
    expect(parser.parseCode("OK")).toMatchSnapshot();
  });
});
