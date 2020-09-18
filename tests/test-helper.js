import Application from 'test-mbkit/app';
import config from 'test-mbkit/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
