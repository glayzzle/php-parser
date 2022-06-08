// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/statcache-corruption.phpt
  it("statcache corruption", function () {
    expect(parser.parseCode("<?php\n$a = stat(__FILE__);\nis_link(__FILE__);\n$b = stat(__FILE__);\nprint_r(array_diff($a, $b));\n?>")).toMatchSnapshot();
  });
});
