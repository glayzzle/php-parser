// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_length_basic_001.phpt
  it("Test return type and value, as well as basic behaviour, of ob_get_length()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\necho \"No output buffers\\n\";\nvar_dump(ob_get_length());\nob_start();\nvar_dump(ob_get_length());\necho \"hello\\n\";\nvar_dump(ob_get_length());\nob_flush();\n$value = ob_get_length();\necho \"hello\\n\";\nob_clean();\nvar_dump(ob_get_length());\nvar_dump($value);\nob_end_flush();\necho \"No output buffers\\n\";\nvar_dump(ob_get_length());\n?>")).toMatchSnapshot();
  });
});
