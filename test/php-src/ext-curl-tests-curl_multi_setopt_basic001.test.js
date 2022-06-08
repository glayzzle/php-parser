// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_setopt_basic001.phpt
  it("curl_multi_setopt basic test", function () {
    expect(parser.parseCode("<?php\n$mh = curl_multi_init();\nvar_dump(curl_multi_setopt($mh, CURLMOPT_PIPELINING, 0));\ntry {\n    curl_multi_setopt($mh, -1, 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
