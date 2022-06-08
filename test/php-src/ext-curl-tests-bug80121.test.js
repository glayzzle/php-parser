// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug80121.phpt
  it("Bug #80121: Null pointer deref if CurlHandle directly instantiated", function () {
    expect(parser.parseCode("<?php\ntry {\n    new CurlHandle;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new CurlMultiHandle;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new CurlShareHandle;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
