// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sockets/tests/socket_set_option_seolinger.phpt
  it("Test if socket_set_option() works, option:SO_SEOLINGER", function () {
    expect(parser.parseCode("<?php\n$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);\nif (!$socket) {\n        die('Unable to create AF_INET socket [socket]');\n}\n// wrong params\ntry {\n    $retval_1 = socket_set_option( $socket, SOL_SOCKET, SO_LINGER, []);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// set/get comparison\n$options = array(\"l_onoff\" => 1, \"l_linger\" => 1);\n$retval_2 = socket_set_option( $socket, SOL_SOCKET, SO_LINGER, $options);\n$retval_3 = socket_get_option( $socket, SOL_SOCKET, SO_LINGER);\n//l_linger not given\n$options_2 = array(\"l_onoff\" => 1);\ntry {\n    var_dump(socket_set_option( $socket, SOL_SOCKET, SO_LINGER, $options_2));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($retval_2);\nvar_dump($retval_3[\"l_linger\"] === $options[\"l_linger\"]);\n// value of l_onoff is not always 1, Darwin returns 128\nvar_dump((bool)$retval_3[\"l_onoff\"] === (bool)$options[\"l_onoff\"]);\nsocket_close($socket);\n?>")).toMatchSnapshot();
  });
});
