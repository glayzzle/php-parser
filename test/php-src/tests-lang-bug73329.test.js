// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug73329.phpt
  it("Bug #73329 (Float)\"Nano\" == NAN", function () {
    expect(parser.parseCode("<?php\n    var_dump(\n        (float)\"nanite\",\n        (float)\"nan\",\n        (float)\"inf\",\n        (float)\"infusorian\"\n    );\n?>")).toMatchSnapshot();
  });
});
