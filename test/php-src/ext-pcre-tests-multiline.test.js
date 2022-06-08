// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/multiline.phpt
  it("Multi-line match", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/^.{2,3}$/', \"aei\\nou\", $dummy));\nvar_dump(preg_match_all('/^.{2,3}$/', \"aei\\nou\\n\", $dummy));\nvar_dump(preg_match_all('/^.{2,3}$/m', \"aei\\nou\", $dummy));\nvar_dump(preg_match_all('/^.{2,3}$/m', \"aei\\nou\\n\", $dummy));\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
