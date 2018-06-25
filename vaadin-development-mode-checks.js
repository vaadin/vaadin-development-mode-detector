if (!window.Vaadin) {
  window['Vaadin'] = {};
}

window.Vaadin.developmentModeChecks = {
  isForcedDevelopmentMode: () => localStorage.getItem('vaadin.developmentmode.force'),

  isLocalhost: () => ['localhost', '127.0.0.1'].indexOf(window.location.hostname) > -1
}
