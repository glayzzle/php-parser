// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_early_binding.phpt
  it("Early binding should work fine inside the preload script", function () {
    expect(parser.parseCode("OK")).toMatchSnapshot();
  });
});
