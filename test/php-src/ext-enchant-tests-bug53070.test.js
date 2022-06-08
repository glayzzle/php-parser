// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/bug53070.phpt
  it("Bug #53070 (enchant_broker_get_path crashes if no path is set)", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nvar_dump(enchant_broker_get_dict_path($broker, ENCHANT_MYSPELL));\nvar_dump(enchant_broker_get_dict_path($broker, ENCHANT_ISPELL));\n?>")).toMatchSnapshot();
  });
});
