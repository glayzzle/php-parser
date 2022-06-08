// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/dns_get_record_error_conditions.phpt
  it("dns_get_record() error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    // A random DNS Mode\n    dns_get_record('php.net', 15263480);\n} catch (\\ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    // DNS Mode 0\n    $auth = [];\n    $additional = [];\n    dns_get_record('php.net', 0, $auth, $additional, true);\n} catch (\\ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    // A random DNS Mode\n    $auth = [];\n    $additional = [];\n    dns_get_record('php.net', 15263480, $auth, $additional, true);\n} catch (\\ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
