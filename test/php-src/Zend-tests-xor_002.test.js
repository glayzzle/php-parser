// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/xor_002.phpt
  it("XORing strings", function () {
    expect(parser.parseCode("<?php\n$s = \"123\";\n$s1 = \"234\";\nvar_dump(bin2hex($s ^ $s1));\n$s = \"1235\";\n$s1 = \"234\";\nvar_dump(bin2hex($s ^ $s1));\n$s = \"some\";\n$s1 = \"test\";\nvar_dump(bin2hex($s ^ $s1));\n$s = \"some long\";\n$s1 = \"test\";\nvar_dump(bin2hex($s ^ $s1));\n$s = \"some\";\n$s1 = \"test long\";\nvar_dump(bin2hex($s ^ $s1));\n$s = \"some\";\n$s ^= \"test long\";\nvar_dump(bin2hex($s));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
