'use strict';

import fetch from 'isomorphic-fetch';
import hooks from './hooks';

const API_ROOT = 'http://poetrydb.org';

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    const endpoint = API_ROOT + '/title/*/title,author';
    return fetch(endpoint)
      .then(response => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
      });
  }

  get(title, params) {
    const endpoint = API_ROOT + `/title/${title}/title,author,lines,linecount`;
    return fetch(endpoint)
      .then(response => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
      });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/api/poems', new Service());

  // Get our initialize service to that we can bind hooks
  const poetryService = app.service('/api/poems');

  // Set up our before hooks
  poetryService.before(hooks.before);

  // Set up our after hooks
  poetryService.after(hooks.after);
};

module.exports.Service = Service;
