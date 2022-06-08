// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_search_error.phpt
  it("ldap_search() - operation that should fail", function () {
    expect(parser.parseCode("<?php\ninclude \"connect.inc\";\n$link = ldap_connect($host, $port);\n$dn = \"dc=not-found,$base\";\n$filter = \"(dc=*)\";\n$result = ldap_search($link, $dn, $filter);\nvar_dump($result);\n$result = ldap_search($link, $dn, $filter, array(1 => 'top'));\nvar_dump($result);\ntry {\n    ldap_search(array(), $dn, $filter, array('top'));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ldap_search(array($link, $link), array($dn), $filter, array('top'));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ldap_search(array($link, $link), $dn, array($filter), array('top'));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ldap_search($link, [], []);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    ldap_search($link, \"\", []);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
