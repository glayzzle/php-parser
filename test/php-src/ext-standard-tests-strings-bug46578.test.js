// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug46578.phpt
  it("Bug #46578 (strip_tags() does not honor end-of-comment when it encounters a single quote)", function () {
    expect(parser.parseCode("<?php\nvar_dump(strip_tags('<!-- testing I\\'ve been to mars -->foobar'));\nvar_dump(strip_tags('<a alt=\"foobar\">foo<!-- foo! --></a>bar'));\nvar_dump(strip_tags('<a alt=\"foobar\"/>foo<?= foo! /* <!-- \"cool\" --> */ ?>bar'));\nvar_dump(strip_tags('< ax'));\nvar_dump(strip_tags('<! a>'));\nvar_dump(strip_tags('<? ax'));\n?>")).toMatchSnapshot();
  });
});
