// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_error_handler.phpt
  it("Bug #81353: Segfault with preloading and error handler using static variables", function () {
    expect(parser.parseCode("===DONE===")).toMatchSnapshot();
  });
});
