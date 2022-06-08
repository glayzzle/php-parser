// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_createFromInterface-001.phpt
  it("Tests for DateTime::createFromInterface", function () {
    expect(parser.parseCode("<?php\n$current = \"2014-03-02 16:24:08\";\n$i = DateTime::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = DateTime::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n$current = \"2019-12-16 15:06:46 CET\";\n$i = DateTime::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = DateTime::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n$current = \"2019-12-16 15:08:20 +0100\";\n$i = DateTime::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = DateTime::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n?>")).toMatchSnapshot();
  });
});
