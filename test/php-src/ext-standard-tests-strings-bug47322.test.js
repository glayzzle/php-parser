// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug47322.phpt
  it("Bug #47322 (sscanf %d doesn't work)", function () {
    expect(parser.parseCode("<?php\nsscanf(\":59:58\",\"%s:%d:%f\", $a, $b, $c);\necho \"[$a][$b][$c]\\n\";\nsscanf(\"15:01:58.2\",\"%d:%f:%f\", $a, $b, $c);\necho \"[$a][$b][$c]\\n\";\nsscanf(\"15.1111::foo\",\"%f:%d:%s\", $a, $b, $c);\necho \"[$a][$b][$c]\\n\";\n?>")).toMatchSnapshot();
  });
});
