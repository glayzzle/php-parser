// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_015.phpt
  it("output buffering - failure", function () {
    expect(parser.parseCode("<?php\nob_start(\"str_rot13\", 1);\ntry {\n    echo \"foo\\n\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
