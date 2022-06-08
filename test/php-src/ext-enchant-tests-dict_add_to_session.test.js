// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_add_to_session.phpt
  it("enchant_dict_add_to_session() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$newWord = \"iLoveJavaScript\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        echo(\"OK\\n\");\n        $AddtoSessionDict = enchant_dict_add_to_session($requestDict,$newWord);\n        if (NULL === $AddtoSessionDict) {\n            var_dump($AddtoSessionDict);\n        } else {\n            echo(\"dict add to session failed\\n\");\n        }\n    } else {\n        echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
