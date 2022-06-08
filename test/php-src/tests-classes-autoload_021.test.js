// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_021.phpt
  it("Validation of class names in the autoload process", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo \"$name\\n\";\n});\n$a = \"../BUG\";\n$x = new $a;\necho \"BUG\\n\";\n?>")).toMatchSnapshot();
  });
});
