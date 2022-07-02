// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_blowfish_variation2.phpt
  it("Test Blowfish crypt() does not fall back to DES when rounds are not specified,\nor Blowfish is not available.", function () {
    expect(parser.parseCode("<?php\n$crypt = crypt('U*U', '$2a$CCCCCCCCCCCCCCCCCCCCC.E5YPO9kmyuRGyh0XouQYb4YMJKvyOeW');\nif ($crypt==='*0') {\n    echo \"OK\\n\";\n} else {\n    echo \"Not OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
