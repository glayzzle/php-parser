// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_quick_check_01.phpt
  it("enchant_dict_quick_check() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$word = \"aspell\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        enchant_dict_quick_check($requestDict,$word,$sugs);\n        if (is_array($sugs)) {\n            echo(\"OK\\n\");\n        } else {\n            echo(\"dict quick check failed\\n\");\n        }\n    } else {\n        echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
