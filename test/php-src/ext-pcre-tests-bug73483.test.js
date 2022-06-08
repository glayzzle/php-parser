// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug73483.phpt
  it("Bug #73483 (Segmentation fault on pcre_replace_callback)", function () {
    expect(parser.parseCode("<?php\n$regex = \"#dummy#\";\nsetlocale(LC_ALL, \"C\");\nvar_dump(preg_replace_callback($regex, function (array $matches) use($regex) {\n    setlocale(LC_ALL, \"en_US\");\n    $ret = preg_replace($regex, \"okey\", $matches[0]);\n    setlocale(LC_ALL, \"C\");\n    return $ret;\n}, \"dummy\"));\n?>")).toMatchSnapshot();
  });
});
