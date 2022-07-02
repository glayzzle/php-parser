// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_018.phpt
  it("Combination of foreach, finally and goto", function () {
    expect(parser.parseCode("<?php\nforeach ([new stdClass] as $a) {\n    try {\n        foreach ([new stdClass] as $a) {\n            try {\n                foreach ([new stdClass] as $a) {\n                    goto out;\n                }\n            } finally {\n                echo \"finally1\\n\";\n            }\nout: ;\n        }\n    } finally {\n        echo \"finally2\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
