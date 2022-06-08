// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/filter_errors_convert_base64_decode.phpt
  it("Filter errors: convert.base64-decode", function () {
    expect(parser.parseCode("<?php\nrequire 'filter_errors.inc';\nfilter_errors_test('convert.base64-decode', '===');\n?>")).toMatchSnapshot();
  });
});
