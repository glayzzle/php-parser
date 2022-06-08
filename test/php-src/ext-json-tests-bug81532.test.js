// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug81532.phpt
  it("Bug #81532: Change of $depth behaviour in json_encode() on PHP 8.1", function () {
    expect(parser.parseCode("<?php\n// depth 1\n$a = new \\stdClass();\n// depth 2\n$b = new \\stdClass();\n$b->x = $a;\n// depth 3\n$c = new \\stdClass();\n$c->x = [$a];\nvar_export(json_encode($a, 0, 0)); echo \"\\n\";\nvar_export(json_encode($a, 0, 1)); echo \"\\n\";\nvar_export(json_encode($b, 0, 1)); echo \"\\n\";\nvar_export(json_encode($b, 0, 2)); echo \"\\n\";\nvar_export(json_encode($c, 0, 2)); echo \"\\n\";\nvar_export(json_encode($c, 0, 3)); echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
