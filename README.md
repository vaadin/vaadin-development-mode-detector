Utility method for detecting that an application using Vaadin Elements is running in development mode

### Polymer 3 publishing

1. Run `magi p3-convert --out . --import-style=name`
2. Remove `@polymer/polymer/lib/utils/import-href.js` import from the output
3. Commit the changes
4. Publish to npm

## Running Tests

There are no automatic tests as the functionality depends on the host the code is run on (localhost vs others) and the bundling status.

To verify functionality:
1. Run `bower install`
1. Run `mkdir bower_components/vaadin-development-mode-detector`
1. Run `cp vaadin-development-mode-detector.html bower_components/vaadin-development-mode-detector/vaadin-development-mode-detector.html`
1. Run `polyserve -H 0.0.0.0`
1. Open http://localhost:8081/components/vaadin-development-mode-detector/test/
  1. Verify that `mode` is `development` (green)
  1. Verify that `importIfDevelopmentMode` is `imported` (green)
1. Open http://`<yourip>`:8081/components/vaadin-development-mode-detector/test/
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Run `polymer build --entrypoint test/index.html --bundle`
1. Open http://localhost:8081/build/default/test/
  1. Verify that `mode` is `production` (orange)
  1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
1. Open http://`<yourip>`:8081/build/default/test/
    1. Verify that `mode` is `production` (orange)
    1. Verify that `importIfDevelopmentMode` is `ignored` (orange)
