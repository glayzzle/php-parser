// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/idn_uts46_errors.phpt
  it("IDN UTS #46 API error tests", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\necho \"=> PHP level errors\", \"\\n\";\necho \"bad variant:\", \"\\n\";\nvar_dump(idn_to_ascii(\"\", 0, INTL_IDNA_VARIANT_UTS46 + 10));\necho \"empty domain:\", \"\\n\";\nvar_dump(idn_to_ascii(\"\", 0, INTL_IDNA_VARIANT_UTS46));\necho \"with error, but no details arg:\", \"\\n\";\nvar_dump(idn_to_ascii(\"www.fußball.com-\", 0, INTL_IDNA_VARIANT_UTS46));\necho \"with error, with details arg:\", \"\\n\";\nvar_dump(idn_to_ascii(\"www.fußball.com-\", IDNA_NONTRANSITIONAL_TO_ASCII,\n    INTL_IDNA_VARIANT_UTS46, $foo));\nvar_dump($foo);\necho \"with error, with details arg, contextj:\", \"\\n\";\nvar_dump(idn_to_ascii(\n        html_entity_decode(\"www.a&#x200D;b.com\", 0, \"UTF-8\"),\n        IDNA_NONTRANSITIONAL_TO_ASCII | IDNA_CHECK_CONTEXTJ,\n        INTL_IDNA_VARIANT_UTS46, $foo));\nvar_dump($foo);\nvar_dump($foo[\"errors\"]==IDNA_ERROR_CONTEXTJ);\n?>")).toMatchSnapshot();
  });
});
