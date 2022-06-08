// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/invalidobj.phpt
  it("invalid object raise exception() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\nif (is_object($broker)) {\n\techo \"OK\\n\";\n\t@enchant_broker_free($broker);\n\ttry {\n\t\t@enchant_broker_free($broker);\n\t} catch (ValueError $e) {\n\t\techo $e->getMessage().\"\\n\";\n\t}\n} else {\n\texit(\"init failed\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
