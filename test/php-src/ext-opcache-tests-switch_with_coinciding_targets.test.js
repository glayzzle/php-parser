// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/switch_with_coinciding_targets.phpt
  it("Switch where all targets, including default, coincide", function () {
    expect(parser.parseCode("<?php\n$foo = 42.0;\n$bar = true;\nswitch ($foo) {\ndefault:\ncase 0: case 1: case 2: case 3:\n    if ($bar) {\n        echo \"true\\n\";\n    } else {\n        echo \"false\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
