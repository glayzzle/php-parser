// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/enchant_broker_set_dict_path.phpt
  it("proto bool enchant_broker_set_dict_path(resource broker, int dict_type, string value) function\nproto string enchant_broker_get_dict_path(resource broker, int dict_type) function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$backEndDictType1 = \"MYSPELL\";\n$backEndDictType2 = \"ISPELL\";\n$dictTypeValue1 = 1;\n$dictTypeValue2 = 2;\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    if (enchant_broker_set_dict_path($broker, $dictTypeValue1, $backEndDictType1)) {\n        echo(\"OK\\n\");\n        if (enchant_broker_set_dict_path($broker, $dictTypeValue2, $backEndDictType2)) {\n            echo(\"OK\\n\");\n            if (\n                  (enchant_broker_get_dict_path($broker,$dictTypeValue1) == $backEndDictType1) &&\n                  (enchant_broker_get_dict_path($broker,$dictTypeValue2) == $backEndDictType2)\n              ) {\n                   echo(\"OK\\n\");\n            } else {\n                   echo(\"broker get dict path has failed \\n\");\n            }\n        } else {\n           echo(\"broker set dict path {$backEndDictType2} has failed \\n\");\n        }\n    } else {\n        echo(\"broker set dict path {$backEndDictType1} has failed \\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed; \\n\");\n}\n?>")).toMatchSnapshot();
  });
});
