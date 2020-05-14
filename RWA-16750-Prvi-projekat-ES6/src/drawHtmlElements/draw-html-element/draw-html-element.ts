export function drawHtmlElement(parent: HTMLElement, htmlTag: string, id: string) {
  let element: HTMLElement = document.createElement(htmlTag);
  element.id = id;
  parent.appendChild(element);

  return element;
}
