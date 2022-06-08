// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62097.phpt
  it("Bug #62097: fix for bug #54547 is wrong for 32-bit machines", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"02147483647\" == \"2147483647\",\n         \"02147483648\" == \"2147483648\",\n         \"09007199254740991\" == \"9007199254740991\",\n         \"09007199254740992\" == \"9007199254740992\");\n?>")).toMatchSnapshot();
  });
});
