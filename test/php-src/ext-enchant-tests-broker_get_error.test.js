// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_get_error.phpt
  it("enchant_broker_get_error() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $enchantErr = enchant_broker_get_error($broker);\n    if (\"\" == $enchantErr) {\n        echo(\"OK\\n\");\n    } else {\n        echo(\"enchant failed ==>\" . $enchantErr);\n    }\n} else {\n    echo(\"init failed\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
