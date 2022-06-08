// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_012.phpt
  it("output buffering - multiple", function () {
    expect(parser.parseCode("<?php\necho 0;\n    ob_start();\n        ob_start();\n            ob_start();\n                ob_start();\n                    echo 1;\n                ob_end_flush();\n                echo 2;\n            $ob = ob_get_clean();\n        echo 3;\n        ob_flush();\n        ob_end_clean();\n    echo 4;\n    ob_end_flush();\necho $ob;\n?>")).toMatchSnapshot();
  });
});
