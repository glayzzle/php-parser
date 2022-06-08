// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug47229.phpt
  it("Bug #47229 (preg_quote() doesn't escape -)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_quote('-oh really?'));\n// make sure there's no regression in matching\npreg_match('/[a\\-c]+/', 'a---b', $m);\nvar_dump($m);\npreg_match('/[a\\-c]+/', 'a\\-', $m);\nvar_dump($m);\npreg_match(\"/a\\-{2,}/\", 'a----a', $m);\nvar_dump($m);\npreg_match(\"/a\\-{1,}/\", 'a\\----a', $m);\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
