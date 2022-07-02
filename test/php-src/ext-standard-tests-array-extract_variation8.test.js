// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation8.phpt
  it("Test extract() function (variation 8)", function () {
    expect(parser.parseCode("<?php\n/* To show variables with numerical prefixes cannot be extracted */\n$var[\"i\"] = 1;\n$var[\"j\"] = 2;\n$var[\"k\"] = 3;\necho \"\\n*** Testing for Numerical prefixes ***\\n\";\nvar_dump(extract($var));\n$var1[\"m\"] = 1;\n$var1[2] = 2;\n$var1[] = 3;\nvar_dump ( extract($var1));\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
