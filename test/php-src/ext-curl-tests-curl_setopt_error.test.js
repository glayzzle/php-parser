// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_error.phpt
  it("curl_setopt() basic parameter test", function () {
    expect(parser.parseCode("<?php\necho \"*** curl_setopt() call with incorrect parameters\\n\";\n$ch = curl_init();\ntry {\n    curl_setopt($ch, '', false);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    curl_setopt($ch, -10, 0);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    curl_setopt($ch, 1000, 0);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
