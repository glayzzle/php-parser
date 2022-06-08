// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_free_01.phpt
  it("@enchant_broker_free() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    if (@enchant_broker_free($broker)) {\n        echo(\"OK\\n\");\n    } else {\n        echo(\"broker free failed\\n\");\n    }\n} else {\n    echo(\"init failed\\n\");\n}\necho(\"OK\\n\");\n?>")).toMatchSnapshot();
  });
});
