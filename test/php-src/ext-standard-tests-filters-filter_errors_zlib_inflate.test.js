// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/filter_errors_zlib_inflate.phpt
  it("Filter errors: zlib.inflate", function () {
    expect(parser.parseCode("<?php\nrequire 'filter_errors.inc';\nfilter_errors_test('zlib.inflate', gzencode('42'));\n?>")).toMatchSnapshot();
  });
});
