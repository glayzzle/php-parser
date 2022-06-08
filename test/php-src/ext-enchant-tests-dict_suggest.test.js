// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_suggest.phpt
  it("enchant_dict_suggest() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\n$sugs = \"soong\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        echo(\"OK\\n\");\n        $dictSuggest = enchant_dict_suggest($requestDict,$sugs);\n        if (is_array($dictSuggest)) {\n            echo(\"OK\\n\");\n        } else {\n            echo(\"dict suggest failed\\n\");\n        }\n    } else {\n    echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
