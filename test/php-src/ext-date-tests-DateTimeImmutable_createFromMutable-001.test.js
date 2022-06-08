// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTimeImmutable_createFromMutable-001.phpt
  it("Tests for DateTimeImmutable::createFromMutable", function () {
    expect(parser.parseCode("<?php\n$current = \"2014-03-02 16:24:08\";\n$i = DateTimeImmutable::createFromMutable( date_create( $current ) );\nvar_dump( $i );\ntry {\n    DateTimeImmutable::createFromMutable( date_create_immutable( $current ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
