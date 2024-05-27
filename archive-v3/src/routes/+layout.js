export const prerender = true;

export const load = async ({url}) => {
  return { pathname: url.pathname };
};