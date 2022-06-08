// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/tiger.phpt
  it("Hash: tiger algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('tiger192,3', ''),\"\\n\";\necho hash('tiger192,3', 'abc'),\"\\n\";\necho hash('tiger192,3', str_repeat('a', 63)),\"\\n\";\necho hash('tiger192,3', str_repeat('abc', 61)),\"\\n\";\necho hash('tiger192,3', str_repeat('abc', 64)),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
