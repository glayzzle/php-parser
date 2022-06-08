// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug70345.phpt
  it("Bug #70345 (Multiple vulnerabilities related to PCRE functions)", function () {
    expect(parser.parseCode("<?php\n$regex = '/(?=xyz\\K)/';\n$subject = \"aaaaxyzaaaa\";\nvar_dump(preg_split($regex, $subject));\n$regex = '/(a(?=xyz\\K))/';\n$subject = \"aaaaxyzaaaa\";\npreg_match($regex, $subject, $matches);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
