// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_time_fractions_create_from_format.phpt
  it("Fractions with DateTime objects (create_from_format)", function () {
    expect(parser.parseCode("<?php\n$dt = date_create_from_format( \"Y-m-d H:i:s.u\", \"2016-10-03 12:47:18.819313\" );\nvar_dump( $dt );\n$dt = date_create_from_format( \"U.u\", \"1475500799.176312\" );\nvar_dump( $dt );\n?>")).toMatchSnapshot();
  });
});
