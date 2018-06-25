Utility method for detecting that an application using Vaadin Elements is running in development mode

## Running Tests

There are no automatic tests as the functionality depends on the host the code is run on (localhost vs others) and the bundling status.

To verify functionality:
1. Run `bower install`
1. Run `cd test && bower install ; cd ..`
1. Run `ln -s "$(pwd)" ./test/bower_components/vaadin-development-mode-detector`
1. Run `polymer serve -H 0.0.0.0 -P 8081`
1. Open http://localhost:8081/test/index.html
  1. Verify that `mode` is `development` (green)
  1. Verify that `importIfDevelopmentMode` is `imported` (green)
1. Open http://`<yourip>`:8081/test/index.html
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Run `cd test && polymer build --bundle && cd ..`
1. Open http://localhost:8081/test/build/default/index.html
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Open http://`<yourip>`:8081/test/build/default/index.html
    1. Verify that `mode` is `production` (orange)
    1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
