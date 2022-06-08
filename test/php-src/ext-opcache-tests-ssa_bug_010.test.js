// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_010.phpt
  it("Wrong assertion", function () {
    expect(parser.parseCode("<?php\nfunction foo($parts, $a, $b) {\n  $name = $a;\n  $level = 1;\n  foreach ($parts as $part) {\n    if ($level == 1) {\n      $level = 4;\n      $found = true;\n      switch ($part) {\n        case 'general':\n          break;\n        case 'bg':\n          $name = $b;\n          break;\n      }\n      if ($found) {\n        continue;\n      }\n    }\n    if ($level == 2) {\n      continue;\n    }\n  }\n  return $name;\n}\n?>\nOK")).toMatchSnapshot();
  });
});
