// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/026.phpt
  it("ReflectionExtension::info()", function () {
    expect(parser.parseCode("<?php\n$r = new ReflectionExtension(\"reflection\");\n$r->info();\ndate_default_timezone_set('Europe/Berlin');\n$r = new ReflectionExtension(\"date\");\n$r->info();\necho \"\\nDone!\\n\";\n?>")).toMatchSnapshot();
  });
});
