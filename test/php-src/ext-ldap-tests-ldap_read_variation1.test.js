// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_read_variation1.phpt
  it("ldap_read() does not modify $attributes array", function () {
    expect(parser.parseCode("<?php\n$array = [123, 456, 789];\ntry {\n  ldap_read(null, '', '', $array);\n} catch (TypeError $err) {}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
