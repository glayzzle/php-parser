// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77257.phpt
  it("Bug #77257: value of variable assigned in a switch() construct gets lost", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    $a = false;\n    switch($x[\"y\"]) {\n        case \"a\":\n            $a = true;\n            break;\n        case \"b\":\n            break;\n        case \"c\":\n            break;\n    }\n    return $a;\n}\nvar_dump(test([\"y\" => \"a\"]));\n?>")).toMatchSnapshot();
  });
});
