// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/write_property.phpt
  it("Writing to mysqli properties", function () {
    expect(parser.parseCode("<?php\n$driver = new mysqli_driver;\ntry {\n    /* Read-only property */\n    $driver->client_info = 'test';\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$driver->reconnect = 0;\nvar_dump($driver->reconnect);\n$str = '4';\n$str .= '2';\n$driver->reconnect = $str;\nvar_dump($driver->reconnect);\ntry {\n    $driver->reconnect = [];\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$driver->report_mode = \"1\";\nvar_dump($driver->report_mode);\ntry {\n    $driver->report_mode = [];\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
