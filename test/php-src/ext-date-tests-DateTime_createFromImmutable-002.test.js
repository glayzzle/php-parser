// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/DateTime_createFromImmutable-002.phpt
  it("Tests for inherited DateTime::createFromImmutable", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime {}\n$current = \"2014-03-02 16:24:08\";\n$i = date_create_immutable( $current );\n$m = MyDateTime::createFromImmutable( $i );\nvar_dump( $m );\n$m->modify('+ 1 hour');\nvar_dump( $i->format('Y-m-d H:i:s') === $current );\ntry {\n    MyDateTime::createFromImmutable( date_create( $current ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
