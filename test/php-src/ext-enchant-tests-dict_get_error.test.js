// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/dict_get_error.phpt
  it("enchant_dict_get_error() function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$dicts = enchant_broker_list_dicts($broker);\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_dict($broker, $dicts[0]['lang_tag']);\n    if ($requestDict) {\n        var_dump(enchant_dict_get_error($requestDict));\n    } else {\n        echo(\"broker request dict failed\\n\");\n    }\n} else {\n    echo(\"init failed\\n\");\n}\necho(\"OK\\n\");\n?>")).toMatchSnapshot();
  });
});
