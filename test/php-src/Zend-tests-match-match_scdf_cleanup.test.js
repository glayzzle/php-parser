// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/match_scdf_cleanup.phpt
  it("Cleanup of basic block kept only because of FREE loop var", function () {
    expect(parser.parseCode("<?php\nvar_dump(X||match(X and true or true){false=>X});\n?>")).toMatchSnapshot();
  });
});
