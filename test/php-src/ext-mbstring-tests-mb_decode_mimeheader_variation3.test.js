// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_decode_mimeheader_variation3.phpt
  it("Test mb_decode_mimeheader() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_decode_mimeheader() : variation ***\\n\";\nmb_internal_encoding('iso-8859-7');\n//greek in UTF-8 to be converted to iso-8859-7\n$encoded_word = \"=?UTF-8?B?zrHOss6zzrTOtc62zrfOuM65zrrOu868zr3Ovs6/z4DPgc+Dz4TPhc+Gz4fPiM+J?=\";\nvar_dump(bin2hex(mb_decode_mimeheader($encoded_word)));\n?>")).toMatchSnapshot();
  });
});
