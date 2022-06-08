// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_quick_check.phpt
  it("enchant_dict_quick_check() basic test", function () {
    expect(parser.parseCode("<?php\n$tag = 'en_US';\n$r = enchant_broker_init();\n$d = enchant_broker_request_dict($r, $tag);\nenchant_dict_quick_check($d, 'soong', $suggs);\necho \"Elements: \" . count($suggs) . \"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
