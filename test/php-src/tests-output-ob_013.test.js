// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_013.phpt
  it("output buffering - handlers/status", function () {
    expect(parser.parseCode("<?php\nfunction a($s){return $s;}\nfunction b($s){return $s;}\nfunction c($s){return $s;}\nfunction d($s){return $s;}\nob_start();\nob_start('a');\nob_start('b');\nob_start('c');\nob_start('d');\nob_start();\necho \"foo\\n\";\nob_flush();\nob_end_clean();\nob_flush();\nprint_r(ob_list_handlers());\nprint_r(ob_get_status());\nprint_r(ob_get_status(true));\n?>")).toMatchSnapshot();
  });
});
