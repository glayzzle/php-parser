// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug47842.phpt
  it("Bug #47842      sscanf() does not support 64-bit values", function () {
    expect(parser.parseCode("<?php\necho \"-Test\\n\";\nsscanf(\"2147483647\", '%d', $int);\necho \"sscanf 32-bit signed int '2147483647'           (2^31)-1 = \",$int,\"\\n\";\nsscanf(\"4294967295\", '%u', $int);\necho \"sscanf 32-bit unsign int '4294967295'           (2^32)-1 = \",$int,\"\\n\";\nsscanf(\"9223372036854775807\", '%d', $int);\necho \"sscanf 64-bit signed int '9223372036854775807'  (2^63)-1 = \",$int,\"\\n\";\nsscanf(\"18446744073709551615\", '%u', $int);\necho \"sscanf 64-bit unsign int '18446744073709551615' (2^64)-1 = \",$int,\"\\n\";\nprintf(\"printf 64-bit signed int '9223372036854775807'  (2^63)-1 = %d\\n\", 9223372036854775807);\nprintf(\"printf 64-bit signed int '18446744073709551615' (2^64)-1 = %u\\n\", 18446744073709551615);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
