// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/008.phpt
  it("zlib.output_compression=1 with client not accepting compression", function () {
    expect(parser.parseCode("===DONE===")).toMatchSnapshot();
  });
});
