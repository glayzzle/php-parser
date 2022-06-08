// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ini_leading_zero.phpt
  it("Leading zero in opcache.jit option", function () {
    expect(parser.parseCode("===DONE===")).toMatchSnapshot();
  });
});
