// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_describe.phpt
  it("enchant_broker_describe() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$counter = 0;\nif($broker) {\n    echo(\"OK\\n\");\n    $provider = enchant_broker_describe($broker);\n    if (is_array($provider)) {\n        echo(\"OK\\n\");\n    if ((isset($provider[$counter]['name']) && isset($provider[$counter]['desc']) && isset($provider[$counter]['file']))) {\n       echo(\"OK\\n\");\n    } else {\n       echo(\"failed, broker describe\\n\");\n    }\n    } else {\n        echo \"failed, brocker describe array \\n\";\n    }\n    @enchant_broker_free($broker);\n} else {\n    echo(\"failed, broker_init failure\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
