// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/json_exceptions_error_clearing.phpt
  it("JSON_THROW_ON_ERROR: global error flag untouched", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_last_error());\n// here we cause a different kind of error to the following errors, so that\n// we can be sure the global error state looking unchanged isn't coincidence\njson_decode(\"\\xFF\");\nvar_dump(json_last_error());\ntry {\n    json_decode(\"\", false, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    echo \"Caught JSON exception: \", $e->getCode(), PHP_EOL;\n}\nvar_dump(json_last_error());\ntry {\n    json_decode(\"{\", false, 512, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    echo \"Caught JSON exception: \", $e->getCode(), PHP_EOL;\n}\nvar_dump(json_last_error());\ntry {\n    json_encode(NAN, JSON_THROW_ON_ERROR);\n} catch (JsonException $e) {\n    echo \"Caught JSON exception: \", $e->getCode(), PHP_EOL;\n}\nvar_dump(json_last_error());\n?>")).toMatchSnapshot();
  });
});
