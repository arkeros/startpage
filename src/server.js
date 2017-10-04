/**
 * Copyright (C) 2017 Rafael Arquero (@arkeros)
 *
 * This file is part of Startpage tilde.
 *
 * Startpage tilde is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Startpage tilde is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Startpage tilde.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import baseCss from './components/base.css';
import Html from './components/Html';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import { PORT } from './config';


const app = express();

if (__DEV__) {
  app.enable('trust proxy');
}

const data = {
  title: '~',
  description: 'arkeros startpage (tilde fork)',
  scripts: [
    assets.vendor.js,
    assets.client.js,
  ],
  styles: [
    { id: 'css', cssText: baseCss },
  ],
  code: '',
};
const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
const index = `<!doctype html>${html}`;

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  res.send(index);
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(PORT, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

export default app;
