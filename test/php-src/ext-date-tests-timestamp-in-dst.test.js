// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/timestamp-in-dst.phpt
  it("Format timestamp in DST test", function () {
    expect(parser.parseCode("<?php\nvar_dump( date_create( '@1202996091' )->format( 'c' ) );\n?>")).toMatchSnapshot();
  });
});
