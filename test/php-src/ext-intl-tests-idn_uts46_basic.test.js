// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/idn_uts46_basic.phpt
  it("IDN UTS #46 API basic tests", function () {
    expect(parser.parseCode("<?php\n$utf8dn = \"www.fußball.com\";\n$asciiNonTrans = \"www.xn--fuball-cta.com\";\necho \"all ok, no details:\", \"\\n\";\nvar_dump(idn_to_ascii($utf8dn,\n    IDNA_NONTRANSITIONAL_TO_ASCII, INTL_IDNA_VARIANT_UTS46));\necho \"all ok, no details, transitional:\", \"\\n\";\nvar_dump(idn_to_ascii($utf8dn, 0, INTL_IDNA_VARIANT_UTS46));\necho \"all ok, with details:\", \"\\n\";\nvar_dump(idn_to_ascii($utf8dn, IDNA_NONTRANSITIONAL_TO_ASCII,\n    INTL_IDNA_VARIANT_UTS46, $info));\nvar_dump($info);\necho \"reverse, ok, with details:\", \"\\n\";\nvar_dump(idn_to_utf8($asciiNonTrans, 0, INTL_IDNA_VARIANT_UTS46, $info));\nvar_dump($info);\n?>")).toMatchSnapshot();
  });
});
