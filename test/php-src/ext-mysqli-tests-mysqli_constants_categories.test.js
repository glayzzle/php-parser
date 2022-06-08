// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_constants_categories.phpt
  it("Constants exported by ext/mysqli - checking category - PHP bug not mysqli bug (check from time to time)", function () {
    expect(parser.parseCode("<?php\n    $constants = get_defined_constants(true);\n    foreach ($constants as $group => $consts) {\n        foreach ($consts as $name => $value) {\n            if (stristr($name, 'mysqli')) {\n                if ('mysqli' != $group)\n                printf(\"found constant '%s' in group '%s'. expecting group 'mysqli'\\n\", $name, $group);\n            }\n        }\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
