// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/crypt_variation1.phpt
  it("crypt() function - long salt", function () {
    expect(parser.parseCode("<?php\n$b = str_repeat(\"A\", 124);\necho crypt(\"A\", \"$5$\" . $b).\"\\n\";\n$b = str_repeat(\"A\", 125);\necho crypt(\"A\", \"$5$\" . $b).\"\\n\";\n$b = str_repeat(\"A\", 4096);\necho crypt(\"A\", \"$5$\" . $b).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
