// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bzerr_functions_on_invalid_stream.phpt
  it("Calling bzerr* functions on non-bz2 streams", function () {
    expect(parser.parseCode("<?php\n$f = fopen(__FILE__, 'r');\ntry {\n    var_dump(bzerrno($f));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(bzerrstr($f));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(bzerror($f));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
