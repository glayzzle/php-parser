// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_list_dicts.phpt
  it("enchant_broker_list_dicts() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $brokerListDicts = enchant_broker_list_dicts($broker);\n    if (is_array($brokerListDicts)) {\n        echo(\"OK\\n\");\n    } else {\n        echo(\"broker list dicts failed\\n\");\n    }\n} else {\n    echo(\"init failed\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
