// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_set_ordering.phpt
  it("enchant_broker_set_ordering() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$comma = \";\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    if (enchant_broker_set_ordering($broker,$dicts[0]['lang_tag'],$comma)) {\n        echo(\"OK\\n\");\n    } else {\n        echo(\"enchant failed ==>\" . $enchantErr);\n    }\n} else {\n    echo(\"init failed\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
