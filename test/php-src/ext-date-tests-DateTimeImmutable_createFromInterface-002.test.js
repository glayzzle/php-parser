// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeImmutable_createFromInterface-002.phpt
  it("Tests for DateTimeImmutable::createFromInterface inheritance", function () {
    expect(parser.parseCode("<?php\nclass MyDateTimeImmutable extends DateTimeImmutable {}\n$current = \"2014-03-02 16:24:08\";\n$i = MyDateTimeImmutable::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = MyDateTimeImmutable::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n$current = \"2019-12-16 15:06:46 CET\";\n$i = MyDateTimeImmutable::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = MyDateTimeImmutable::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n$current = \"2019-12-16 15:08:20 +0100\";\n$i = MyDateTimeImmutable::createFromInterface( date_create( $current ) );\nvar_dump( $i );\n$i = MyDateTimeImmutable::createFromInterface( date_create_immutable( $current ) );\nvar_dump( $i );\n?>")).toMatchSnapshot();
  });
});
