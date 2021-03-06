import * as xmlHttpRequest from './xmlhttprequest';
import * as fetch from './fetch';

const interceptor = ({name, reference, fakeService}) => ({
  enable(config) {
    window[name] = fakeService(config);
  },
  disable() {
    window[name] = reference;
  }
});

export const interceptors = {
  'XMLHttpRequest': interceptor(xmlHttpRequest),
  'fetch': interceptor(fetch)
};
