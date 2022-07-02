// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strings001.phpt
  it("Test whether strstr() and strrchr() are binary safe.", function () {
    expect(parser.parseCode("<?php\n$s = \"alabala nica\".chr(0).\"turska panica\";\nvar_dump(strstr($s, \"nic\"));\nvar_dump(strrchr($s,\" nic\"));\n?>")).toMatchSnapshot();
  });
});
