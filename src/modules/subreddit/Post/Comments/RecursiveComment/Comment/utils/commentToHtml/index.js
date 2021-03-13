const divRegEx = new RegExp('<div class="md">', 'g');
const pRegEx = new RegExp('<p>', 'g');

const commentToHtml = (encoded) => {
  const el = document.createElement('textarea');

  el.display = 'none';
  el.innerHTML = encoded;

  const [childNode] = [...el.childNodes];
  let html = childNode?.nodeValue.trim();

  html = html.split('\n').join('<br/>');
  html = html.replace(divRegEx, '');
  html = html.replace(/<\/div>/g, '');
  html = html.replace(pRegEx, '');
  html = html.replace(/<\/p>/g, '');

  return html.trim();
};

export { commentToHtml };
