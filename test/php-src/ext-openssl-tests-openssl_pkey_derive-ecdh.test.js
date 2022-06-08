// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/openssl/tests/openssl_pkey_derive-ecdh.phpt
  it("openssl_pkey_derive() ECDH", function () {
    expect(parser.parseCode("<?php\n$priv = openssl_pkey_get_private(\"-----BEGIN EC PRIVATE KEY-----\nMIHbAgEBBEEHI4mYyIOu8zQYAThKCgDIj4JAMekWFcrJSSa4K+C80xtrT07tz1Yj\nmZdn+7/sAuZ4HBg56EzFBhLGxwGDakot1qAHBgUrgQQAI6GBiQOBhgAEARnoOOKF\nc+1CNtrq2Jq0GvcBjIi1kJpQLfFF1RFgP/jVDeimSJi8elAtl6NqdikDVSIg6ZwT\n6XOz6IdPRZsCMsWyAYeWz2jTRoT93nGLm9G96jwOm0VhLHjp3WtTY4kDp9dVHdhH\nx3Nz35sz8u0CE6befv+Fxo5ORq373v9eDzp62Z8g\n-----END EC PRIVATE KEY-----\n\");\n$pub = openssl_pkey_get_public(\"-----BEGIN PUBLIC KEY-----\nMIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBGs5c8VCdd3VcOAUhuCzEB6uMUDob\nlG5vtncWqvHfcnsR4uHEuufl24rbraVFyVeGr/BV0AfUnnhKGnaEtSDG9h4BMw5A\nvHiBzBCZUlA1TUMSmNpedutkZul4h6gYNrzFtfjmbqSnC0732YgUIrr4yueOSL2E\nN2IRPU2MF6S0S6i44MU=\n-----END PUBLIC KEY-----\n\");\necho bin2hex(openssl_pkey_derive($pub,$priv));\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
