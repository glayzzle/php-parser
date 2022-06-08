// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/bug13181.phpt
  it("bug #13181, leaving a context frees the broker resources", function () {
    expect(parser.parseCode("<?php\nfunction get_dictionnary() {\n    $rBroker = enchant_broker_init();\n    $t = enchant_broker_request_dict($rBroker, 'en');\n    var_dump($t);\n    return $t;\n}\n$rDict = get_dictionnary();\nvar_dump($rDict);\nenchant_dict_suggest($rDict, \"soong\");\nfunction get_broker() {\n    $t = enchant_broker_init();\n    var_dump($t);\n    return $t;\n}\n$rbroker = get_broker();\nvar_dump($rbroker);\nfunction get_dict($broker) {\n    $t = enchant_broker_request_dict($broker, 'en');\n    var_dump($t);\n    return $t;\n}\n$rDict = get_dict($rbroker);\nvar_dump($rDict);\n?>")).toMatchSnapshot();
  });
});
