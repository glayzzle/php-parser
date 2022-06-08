// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug72506.phpt
  it("Bug #72506 (idn_to_ascii with INTL_IDNA_VARIANT_UTS46 fatals for long domain names)", function () {
    expect(parser.parseCode("<?php\n// ASCII domain name with 255 characters\n$domain = str_repeat('a.', 126) . 'aaa';\n$result = idn_to_ascii($domain, 0, INTL_IDNA_VARIANT_UTS46, $info);\nvar_dump($result, $info);\n// ASCII domain name with 256 characters – one character added\n$domain .= 'a';\n$result = idn_to_ascii($domain, 0, INTL_IDNA_VARIANT_UTS46, $info);\nvar_dump($result, $info);\n// International domain name with cyrillic \"ф\" characters\n$domain = str_repeat('ф.', 32) . 'a';\n$result = idn_to_ascii($domain, 0, INTL_IDNA_VARIANT_UTS46, $info);\nvar_dump($result, $info);\n?>")).toMatchSnapshot();
  });
});
