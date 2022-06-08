// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strcut_negative_length.phpt
  it("mb_strcut() negative length test", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_strcut('Déjà vu', 1, -3));\nvar_dump(mb_strcut('Déjà vu', 1, -4));\nvar_dump(mb_strcut('Déjà vu', 1, -5));\nvar_dump(mb_strcut('Déjà vu', 1, -6));\nvar_dump(mb_strcut('Déjà vu', 1, -999));\n?>")).toMatchSnapshot();
  });
});
