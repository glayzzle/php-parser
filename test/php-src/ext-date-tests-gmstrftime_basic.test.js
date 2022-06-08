// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/gmstrftime_basic.phpt
  it("Test gmstrftime() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gmstrftime() : basic functionality ***\\n\";\n// Initialise all required variables\n$format = '%b %d %Y %H:%M:%S';\n$timestamp = gmmktime(8, 8, 8, 8, 8, 2008);\n// Calling gmstrftime() with all possible arguments\nvar_dump( gmstrftime($format, $timestamp) );\n// Calling gmstrftime() with mandatory arguments\nvar_dump( gmstrftime($format) );\n?>")).toMatchSnapshot();
  });
});
