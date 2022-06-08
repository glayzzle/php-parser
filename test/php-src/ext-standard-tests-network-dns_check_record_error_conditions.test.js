// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/dns_check_record_error_conditions.phpt
  it("dns_check_record() error conditions", function () {
    expect(parser.parseCode("<?php\ntry {\n    dns_check_record('');\n} catch (\\ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    // A random DNS Mode\n    dns_check_record('php.net', 15263480);\n} catch (\\ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
