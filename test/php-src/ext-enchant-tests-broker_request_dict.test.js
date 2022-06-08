// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_request_dict.phpt
  it("enchant_broker_request_dict() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\nif (is_array($dicts)) {\n    if (count($dicts)) {\n    $dict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n        if (is_object($dict)) {\n            echo \"OK\\n\";\n        } else {\n            echo \"fail to request \" . $dicts[0]['lang_tag'];\n        }\n    }\n} else {\n    echo(\"list dicts failed\\n\");\n}\necho(\"OK\\n\");\n?>")).toMatchSnapshot();
  });
});
