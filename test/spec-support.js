/* eslint-disable no-unused-vars */
import sinon from 'sinon';
import test from 'ava';
import i18n from 'i18n';
import appRoot from 'app-root-path';

const ss = {}; // stands for spec support

test.beforeEach(t => {
  ss.sinon = sinon.sandbox.create();
});

test.afterEach.always(t => {
  ss.sinon.restore();
});

const t = {}; // translations

i18n.configure({
  locales: ['en', 'ru'],
  register: t,
  directory: `${appRoot.path}/locales`,
});

t.setLocale('en'); // default locale for tests

export { ss, t as i18n };