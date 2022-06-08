// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_request_pwl_dict.phpt
  it("resource enchant_broker_request_pwl_dict(resource $broker, string $filename); function", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\n$pathPwlDict = __DIR__ . \"/enchant_broker_request_pwl_dict.pwl\";\nif (is_object($broker)) {\n    echo(\"OK\\n\");\n    $requestDict = enchant_broker_request_pwl_dict($broker, $pathPwlDict);\n    if (is_object($requestDict)) {\n        echo(\"OK\\n\");\n        $dictdescribe = enchant_dict_describe($requestDict);\n        if ($pathPwlDict === $dictdescribe['file']) {\n            echo(\"OK\\n\");\n        } else {\n            echo(\"broker dict describe is not a resource failed\\n\");\n        }\n    } else {\n        echo(\"dict broker request pwl has failed\\n\");\n    }\n} else {\n    echo(\"broker is not a resource; failed;\\n\");\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
