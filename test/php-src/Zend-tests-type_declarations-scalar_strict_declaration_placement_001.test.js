// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_strict_declaration_placement_001.phpt
  it("Test strict declaration being first operation only", function () {
    expect(parser.parseCode("<?php\nfunction takes_int(int $x) {\n    global $errored;\n    if ($errored) {\n        echo \"Failure!\", PHP_EOL;\n        $errored = FALSE;\n    } else {\n        echo \"Success!\", PHP_EOL;\n    }\n}\n?>\n<?php\ndeclare(strict_types=1);\nvar_dump(takes_int(32));\n?>")).toMatchSnapshot();
  });
});
