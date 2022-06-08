// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78346.phpt
  it("Bug #78346 (strip_tags no longer handling nested php tags)", function () {
    expect(parser.parseCode("<?php\n$str = '<?= \\'<?= 1 ?>\\' ?>2';\nvar_dump(strip_tags($str));\n?>")).toMatchSnapshot();
  });
});
