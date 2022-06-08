// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/ungreedy.phpt
  it("U (PCRE_UNGREEDY) modifier", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/<.*>/', '<aa> <bb> <cc>', $m));\nvar_dump($m);\nvar_dump(preg_match('/<.*>/U', '<aa> <bb> <cc>', $m));\nvar_dump($m);\nvar_dump(preg_match('/(?U)<.*>/', '<aa> <bb> <cc>', $m));\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
