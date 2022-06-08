// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_dict_exists.phpt
  it("enchant_broker_dict_exists() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\nif (enchant_broker_dict_exists($broker, $dicts[0]['lang_tag'])) {\n    echo(\"OK\\n\");\n} else {\n    echo(\"dicts dont exist failed\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
