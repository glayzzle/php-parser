// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_014.phpt
  it("output buffering - failure", function () {
    expect(parser.parseCode("<?php\nob_start(\"str_rot13\");\necho \"foo\\n\";\ntry {\n    ob_end_flush();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
