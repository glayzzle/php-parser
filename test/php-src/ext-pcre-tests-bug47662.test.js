// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug47662.phpt
  it("Bug #47662 (support more than 127 named subpatterns)", function () {
    expect(parser.parseCode("<?php\n$regex = '@';\nfor($bar=0; $bar<129; $bar++) {\n    $regex .= '((?P<x'.$bar.'>))';\n}\n$regex .= 'fo+bar@';\nvar_dump(preg_match($regex, 'foobar'));\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
