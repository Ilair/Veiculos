import React, { Component } from './marca/node_modules/react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Marca } from './marca';
import { Modelo } from './modelo';
import { Anuncio } from './anuncio';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/marca' component={Marca} />
        <Route path='/modelo' component={Modelo} />
        <Route path='/anuncio' component={Anuncio} />
      </Layout>
    );
  }
}
