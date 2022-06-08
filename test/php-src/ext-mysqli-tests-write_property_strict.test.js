// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/write_property_strict.phpt
  it("Writing to mysqli properties (strict_types)", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$driver = new mysqli_driver;\ntry {\n    /* Read-only property */\n    $driver->client_info = 42;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $driver->reconnect = 0;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $driver->report_mode = \"1\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
