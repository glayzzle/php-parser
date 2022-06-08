// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_store_replacement.phpt
  it("enchant_dict_store_replacement() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$wrongWord = \"sava\";\n$rightWord = \"java\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        echo(\"OK\\n\");\n        $AddtoPersonalDict = enchant_dict_store_replacement($requestDict,$wrongWord,$rightWord);\n        if (NULL === $AddtoPersonalDict) {\n            var_dump($AddtoPersonalDict);\n        } else {\n            echo(\"dict add to personal failed\\n\");\n        }\n    } else {\n        echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
