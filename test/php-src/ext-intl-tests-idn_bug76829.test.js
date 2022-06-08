// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/idn_bug76829.phpt
  it("Bug #76829 Incorrect validation of domain on idn_to_utf8() function", function () {
    expect(parser.parseCode("<?php\n$punycode = idn_to_ascii('абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаежзи.абвгдаеж.рф', IDNA_DEFAULT, INTL_IDNA_VARIANT_UTS46);\n$unicode = idn_to_utf8($punycode, IDNA_DEFAULT, INTL_IDNA_VARIANT_UTS46);\nvar_dump($unicode);\n?>")).toMatchSnapshot();
  });
});
