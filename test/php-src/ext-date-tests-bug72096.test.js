// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug72096.phpt
  it("Bug #72096: Swatch time value incorrect for dates before 1970", function () {
    expect(parser.parseCode("<?php\nfor ($unix = 1461283200; $unix <= 1461369600; $unix += 8000) {\n    echo \"Time:\", gmdate('Y-m-d H:i:s = B', $unix), PHP_EOL;\n    echo \"Time:\", gmdate('Y-m-d H:i:s = B', $unix - 82 * 365 * 24 * 3600), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
