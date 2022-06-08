// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug62369.phpt
  it("FR #62369 (Segfault on json_encode(deeply_nested_array)", function () {
    expect(parser.parseCode("<?php\n$array = array();\nfor ($i=0; $i < 550; $i++) {\n    $array = array($array);\n}\njson_encode($array, 0, 551);\nswitch (json_last_error()) {\n    case JSON_ERROR_NONE:\n        echo 'OK' . PHP_EOL;\n    break;\n    case JSON_ERROR_DEPTH:\n        echo 'ERROR' . PHP_EOL;\n    break;\n}\njson_encode($array, 0, 540);\nswitch (json_last_error()) {\n    case JSON_ERROR_NONE:\n        echo 'OK' . PHP_EOL;\n    break;\n    case JSON_ERROR_DEPTH:\n        echo 'ERROR' . PHP_EOL;\n    break;\n}\n?>")).toMatchSnapshot();
  });
});
