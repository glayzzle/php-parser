// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_time_fractions_serialize.phpt
  it("Fractions with DateTime objects (Serialization)", function () {
    expect(parser.parseCode("<?php\n/* Normal creation */\n$dt = date_create( \"2016-10-03 12:47:18.819313\" );\n$s = serialize( $dt );\necho $s, \"\\n\";\n$u = unserialize( $s );\nvar_dump( $u );\n?>")).toMatchSnapshot();
  });
});
