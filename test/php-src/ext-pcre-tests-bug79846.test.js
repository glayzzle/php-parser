// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug79846.phpt
  it("Bug #79846 (8c67c166996 broke simple regexp)", function () {
    expect(parser.parseCode("<?php\n$item = \"component_phase_1\";\npreg_match(\"/([a-z]+_[a-z]+_*[a-z]+)_?(\\d+)?/\", $item, $match);\nvar_dump($match);\n?>")).toMatchSnapshot();
  });
});
