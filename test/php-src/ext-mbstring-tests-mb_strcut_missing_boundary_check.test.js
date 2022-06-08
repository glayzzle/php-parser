// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strcut_missing_boundary_check.phpt
  it("mb_strcut() missing boundary check.", function () {
    expect(parser.parseCode("<?php\nmb_internal_encoding(\"UCS-4LE\");\nvar_dump(bin2hex(mb_strcut(\"\\x61\\x00\\x00\\x00\\x62\\x00\\x00\\x00\\x63\\x00\\x00\\x00\", 0, 32)));\nmb_internal_encoding(\"UCS-4BE\");\nvar_dump(bin2hex(mb_strcut(\"\\x00\\x00\\x00\\x61\\x00\\x00\\x00\\x62\\x00\\x00\\x00\\x63\", 0, 32)));\nmb_internal_encoding(\"UCS-2LE\");\nvar_dump(bin2hex(mb_strcut(\"\\x61\\x00\\x62\\x00\\x63\\x00\", 0, 32)));\nmb_internal_encoding(\"UCS-2BE\");\nvar_dump(bin2hex(mb_strcut(\"\\x00\\x61\\x00\\x62\\x00\\x63\", 0, 32)));\nmb_internal_encoding(\"UTF-16\");\nvar_dump(bin2hex(mb_strcut(\"\\x00\\x61\\x00\\x62\\x00\\x63\", 0, 32)));\nmb_internal_encoding(\"UTF-8\");\nvar_dump(bin2hex(mb_strcut(\"abc\", 0, 32)));\nmb_internal_encoding(\"ISO-8859-1\");\nvar_dump(bin2hex(mb_strcut(\"abc\", 0, 32)));\n?>")).toMatchSnapshot();
  });
});
