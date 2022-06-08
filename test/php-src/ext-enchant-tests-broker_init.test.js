// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_init.phpt
  it("enchant_broker_init() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n} else {\n    echo(\"failure, its not a resource\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
