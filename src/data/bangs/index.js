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

import amazon from './amazonVideo';
import amazonVideo from './amazonVideo';
import bitbucket from './bitbucket';
import discord from './discord';
import facebook from './facebook';
import forocoches from './forocoches';
import github from './github';
import google from './google';
import googleImages from './googleImages';
import googleMaps from './googleMaps';
import instagram from './instagram';
import julia from './julia';
import meneame from './meneame';
import mozillaDeveloperNetwork from './mozillaDeveloperNetwork';
import netflix from './netflix';
import nodeJs from './nodeJs';
import npm from './npm';
import python from './python';
import rae from './rae';
import random from './random';
import reddit from './reddit';
import slack from './slack';
import stackOverflow from './stackOverflow';
import telegram from './telegram';
import twitter from './twitter';
import wikipedia from './wikipedia';
import wolframAlpha from './wolframAlpha';
import youtube from './youtube';

// TODO
// npm react, npm redux ...
// travis
// digitalocean
// cloudflare
// gitignore
// gitlab
// trello https://blog.trello.com/hubfs/Trello_July2016_Theme/trello-logo-white.svg?t=1507217475693
// asana
// todoist
// terraform (all hashicorp stack)
// packer
// parse server
// fiebase
// android docs
// websockets
// react
// redux
// rx // rxjs / reactivex
// medium
// tumblr
// giphy
// angular
// django



const BANGS = new Map();

BANGS.set('*', google);

BANGS.set('a', amazon);
BANGS.set('amazon', amazon);

BANGS.set('av', amazonVideo);

BANGS.set('b', bitbucket);
BANGS.set('bb', bitbucket);
BANGS.set('bitbucket', bitbucket);

BANGS.set('d', discord);
BANGS.set('discord', discord);

BANGS.set('f', facebook);
BANGS.set('fb', facebook);
BANGS.set('facebook', facebook);

BANGS.set('fc', forocoches);
BANGS.set('forocoches', forocoches);

BANGS.set('g', github);
BANGS.set('gh', github);
BANGS.set('github', github);

BANGS.set('gi', googleImages);
BANGS.set('img', googleImages);
BANGS.set('image', googleImages);
BANGS.set('images', googleImages);

BANGS.set('gm', googleMaps);
BANGS.set('map', googleMaps);
BANGS.set('maps', googleMaps);

BANGS.set('i', instagram);
BANGS.set('ig', instagram);
BANGS.set('instagram', instagram);

BANGS.set('jl', julia);
BANGS.set('julia', julia);

BANGS.set('m', meneame);
BANGS.set('meneame', meneame);

BANGS.set('mdn', mozillaDeveloperNetwork);

BANGS.set('n', netflix);
BANGS.set('nf', netflix);
BANGS.set('netflix', netflix);

BANGS.set('node', nodeJs);
BANGS.set('nodejs', nodeJs);

BANGS.set('npm', npm);

BANGS.set('py', python);
BANGS.set('python', python);

BANGS.set('rae', rae);

BANGS.set('rand', random);
BANGS.set('random', random);

BANGS.set('r', reddit);
BANGS.set('reddit', reddit);

BANGS.set('s', slack);
BANGS.set('slack', slack);

BANGS.set('so', stackOverflow);
BANGS.set('stackoverflow', stackOverflow);

BANGS.set('tg', telegram);
BANGS.set('telegram', telegram);

BANGS.set('t', twitter);
BANGS.set('twitter', twitter);

BANGS.set('w', wikipedia);
BANGS.set('wiki', wikipedia);
BANGS.set('wikipedia', wikipedia);

BANGS.set('wa', wolframAlpha);
BANGS.set('wolfram', wolframAlpha);
BANGS.set('wolframalpha', wolframAlpha);

BANGS.set('y', youtube);
BANGS.set('yt', youtube);
BANGS.set('youtube', youtube);

export default BANGS;

/**
 * ['Buy', 'Amazon', 'a', 'https://amazon.es', '/s/?field-keywords={}', '#f90', 'https://i.pinimg.com/originals/95/98/b4/9598b485d75c30986078655d68259c62.png'],
      ['Search', 'Google Maps', 'maps', 'https://google.com/maps', '/maps/search/{}', 'lightgreen', 'https://png.icons8.com/google-maps/color/1600'],
      ['Search', 'Google Maps', 'gm', 'https://google.com/maps', '/maps/search/{}', 'lightgreen', 'https://png.icons8.com/google-maps/color/1600'],
      ['Talk', 'Telegram', 'tg', 'https://web.telegram.org', null, '#5682a3', 'https://telegram.org/img/t_logo.png'],
      ['Talk', 'Discord', 'd', 'https://discordapp.com', null, '#7289da', 'https://p6.zdassets.com/hc/theme_assets/678183/200061268/logo_discord_menu.svg'],
      ['Talk', 'Slack', 's', 'https://slack.com', null, '#4C9689', 'https://brandfolder.com/slack/logo/slack-primary-logo.png'],
      ['Calc', 'Random', 'rand', 'https://random.org', '/search?q={}', '#ddd', 'http://userlogos.org/files/logos/Mafia_Penguin/Random.png'],

 */

export const bangsList = [
  amazon,
  amazonVideo,
  bitbucket,
  discord,
  facebook,
  forocoches,
  github,
  google,
  googleImages,
  googleMaps,
  instagram,
  julia,
  meneame,
  mozillaDeveloperNetwork,
  netflix,
  nodeJs,
  npm,
  rae,
  random,
  reddit,
  python,
  slack,
  stackOverflow,
  telegram,
  twitter,
  wikipedia,
  wolframAlpha,
  youtube,
];

export const bangsByHostname = new Map();
bangsList.forEach((bang) => {
  const url = new URL(bang.url);
  const hostname = url.hostname;
  bangsByHostname.set(hostname, bang);
});
