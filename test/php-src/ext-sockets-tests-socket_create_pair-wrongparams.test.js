// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_create_pair-wrongparams.phpt
  it("Test parameter handling in socket_create_pair()", function () {
    expect(parser.parseCode("<?php\nvar_dump(socket_create_pair(AF_INET, 0, 0, $sockets));\ntry {\n    var_dump(socket_create_pair(31337, 0, 0, $sockets));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(socket_create_pair(AF_INET, 31337, 0, $sockets));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
