// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_free_02.phpt
  it("@enchant_broker_free() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$newWord = array(\"iLoveJava\",\"iLoveJavascript\",\"iLoveRuby\",\"iLovePerl\",\"iLoveAwk\",\"iLoveC\");\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        echo(\"OK\\n\");\n        for($x=0;$x<count($newWord);$x++) {\n            $AddtoPersonalDict = enchant_dict_add($requestDict,$newWord[$x]);\n        }\n        if (NULL === $AddtoPersonalDict) {\n            var_dump($AddtoPersonalDict);\n            if (@enchant_broker_free_dict($requestDict)) {\n                echo(\"OK\\n\");\n                if (@enchant_broker_free($broker)) {\n                    echo(\"OK\\n\");\n                } else {\n                    echo(\"broker free failed\\n\");\n                }\n            } else {\n                echo(\"broker dict free failed\\n\");\n            }\n        } else {\n            echo(\"dict add to personal failed\\n\");\n        }\n    } else {\n        echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"init failed\\n\");\n}\necho(\"OK\\n\");\n?>")).toMatchSnapshot();
  });
});
