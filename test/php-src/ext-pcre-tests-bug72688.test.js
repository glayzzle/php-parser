// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug72688.phpt
  it("Bug #72688 (preg_match missing group names in matches)", function () {
    expect(parser.parseCode("<?php\n$pattern = [];\nfor ($i = 0; $i < 300; $i++) {\n    $pattern[] = \"(?'group{$i}'{$i}$)\";\n}\n$fullPattern = '/' . implode('|', $pattern) . '/uix';\npreg_match($fullPattern, '290', $matches);\nvar_dump($matches['group290']);\n?>")).toMatchSnapshot();
  });
});
