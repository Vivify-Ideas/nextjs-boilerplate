import jsCookie from 'js-cookie';

export const cookieGet = name => {
  try {
    return JSON.parse(jsCookie.get(name));
  } catch (e) {
    return jsCookie.get(name);
  }
};

export const cookieSet = (name, value) => jsCookie.set(name, value);

export const cookieSetObject = (name, value) =>
  jsCookie.set(name, JSON.stringify(value));
