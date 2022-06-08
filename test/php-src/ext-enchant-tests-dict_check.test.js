// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_check.phpt
  it("enchant_dict_check() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$newWord = \"java\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        echo(\"OK\\n\");\n        enchant_dict_add($requestDict, $newWord);\n        if (enchant_dict_check($requestDict, $newWord)) {\n            echo(\"OK\\n\");\n        } else {\n            echo(\"dict check new word failed\\n\");\n        }\n    } else {\n    echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
