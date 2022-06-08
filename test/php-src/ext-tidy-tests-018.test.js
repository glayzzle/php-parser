// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/018.phpt
  it("binary safety", function () {
    expect(parser.parseCode("<?php\n$x = tidy_repair_string(\"<p>abra\\0cadabra</p>\",\n    array(\t'show-body-only' => true,\n            'clean' => false,\n            'newline' => \"\\n\")\n    );\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
