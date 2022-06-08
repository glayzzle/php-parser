// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/casefolding.phpt
  it("Case-insensitive string comparisons use case folding", function () {
    expect(parser.parseCode("<?php\n$tests = [\n    [\"K\", \"K\"],\n    [\"k\", \"K\"],\n    [\"Å\", \"Å\"],\n    [\"å\", \"Å\"],\n    [\"ß\", \"ẞ\"],\n    [\"Θ\", \"ϴ\"],\n    [\"θ\", \"ϴ\"],\n    [\"ϑ\", \"ϴ\"],\n    [\"Ω\", \"Ω\"],\n    [\"ω\", \"Ω\"],\n    [\"I\", \"ı\"],\n    [\"i\", \"ı\"],\n];\nforeach ($tests as list($a, $b)) {\n    var_dump(mb_stripos($a, $b));\n}\n?>")).toMatchSnapshot();
  });
});
