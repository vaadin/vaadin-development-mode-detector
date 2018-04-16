Utility method for detecting that an application using Vaadin Elements is running in development mode

### Polymer 3 publishing

1. Run `magi p3-convert --out . --import-style=name`
2. Remove `@polymer/polymer/lib/utils/import-href.js` import from the output
3. Commit the changes
4. Publish to npm

## Running Tests

There are no automatic tests as the functionality depends on the host the code is run on (localhost vs others) and the bundling status.

To verify functionality:
1. Run `npm test`
1. Run `bower install`
1. Run `npm test`

To execute the test steps manually for Polymer 2:

1. Run `mkdir bower_components/vaadin-development-mode-detector`
1. Run `cp vaadin-development-mode-detector.html bower_components/vaadin-development-mode-detector/vaadin-development-mode-detector.html`
1. Run `polyserve -H 0.0.0.0`
1. Open http://localhost:8081/components/vaadin-development-mode-detector/test.html
  1. Verify that `mode` is `development` (green)
  1. Verify that `importIfDevelopmentMode` is `imported` (green)
1. Open http://`<yourip>`:8081/components/vaadin-development-mode-detector/test.html
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Run `polymer build --entrypoint test/index.html --bundle`
1. Open http://localhost:8081/build/default/test.html
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Open http://`<yourip>`:8081/build/default/test.html
    1. Verify that `mode` is `production` (orange)
    1. Verify that `importIfDevelopmentMode` is `ignored` (orange)

To execute the test steps manually for Polymer 3:
1. Run `modulizer --out . --import-style=name --add-import-path`
1. Run `npm install`
1. Run `polymer serve --npm --module-resolution=node`
1. Open http://localhost:8081/test.html
  1. Verify that `mode` is `development` (green)
  1. Verify that `importIfDevelopmentMode` is `imported` (green)
1. Rollback changes by running `git reset --hard && git clean -df`
