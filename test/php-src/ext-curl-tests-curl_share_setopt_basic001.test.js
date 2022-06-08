// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_share_setopt_basic001.phpt
  it("curl_share_setopt basic test", function () {
    expect(parser.parseCode("<?php\n$sh = curl_share_init();\nvar_dump(curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE));\nvar_dump(curl_share_setopt($sh, CURLSHOPT_UNSHARE, CURL_LOCK_DATA_DNS));\ntry {\n    curl_share_setopt($sh, -1, 0);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
