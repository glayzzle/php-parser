// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74456.phpt
  it("Bug #74456 (Segmentation error while running a script in CLI mode)", function () {
    expect(parser.parseCode("<?php\nfunction small_numbers() {\n        return [0,1,2];\n}\nlist ($zero, $one, $two) = small_numbers();\nvar_dump($zero, $one, $two);\n?>")).toMatchSnapshot();
  });
});
