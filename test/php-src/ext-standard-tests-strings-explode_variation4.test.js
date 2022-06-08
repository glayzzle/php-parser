// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/explode_variation4.phpt
  it("Test explode() function : usage variations - match longer string", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing explode() function: match longer string ***\\n\";\n$pizza  = \"piece1 piece2 piece3 piece4 piece5 piece6 p\";\n$pieces = explode(\" p\", $pizza);\nvar_dump($pieces);\n?>")).toMatchSnapshot();
  });
});
