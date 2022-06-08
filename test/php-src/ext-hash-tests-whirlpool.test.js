// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/whirlpool.phpt
  it("Hash: whirlpool algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('whirlpool', ''), \"\\n\";\necho hash('whirlpool', $s='---qwertzuiopasdfghjklyxcvbnm------qwertzuiopasdfghjklyxcvbnm---'), \"\\n\";\necho hash('whirlpool', str_repeat($s.'0', 1000)), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
