// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug27103.phpt
  it("Bug #27103 (preg_split('//u') incorrectly splits UTF-8 strings into octets)", function () {
    expect(parser.parseCode("<?php\nfunction iter($ar)\n{\n    foreach ($ar as $c) {\n        echo htmlentities($c, 0, \"UTF-8\"), \": \", strlen($c), \"\\n\";\n    }\n}\n$teststr = \"\\xe2\\x82\\xac hi there\";\niter(preg_split('//u', $teststr, -1, PREG_SPLIT_NO_EMPTY));\npreg_match_all('/./u', $teststr, $matches);\niter($matches[0]);\n?>")).toMatchSnapshot();
  });
});
