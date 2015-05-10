<?php

/* @todo : should pass :
  $js =<<<"EOJ"
  Yo man
EOJ
    . "text";
    
    $opml = <<<EOF
   text="{$feeds[0]['title[0][value]']}"
EOF;

        'expected' => <<<'EXPECTED'
$no_index_value_scalar = TRUE;
$no_index_value_foo['foo']['value'] = NULL; // comment
EXPECTED
      ),

    if ($private) {
      $lines = <<<EOF
# Deny all requests from Apache 2.4+.
<IfModule mod_authz_core.c>
  Require all denied
</IfModule>

# Deny all requests from Apache 2.0-2.2.
<IfModule !mod_authz_core.c>
  Deny from all
</IfModule>
EOF
      . $lines;
*/
  echo 'Hello World';