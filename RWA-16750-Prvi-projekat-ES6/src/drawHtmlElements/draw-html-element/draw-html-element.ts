export function drawHtmlElement(parent: HTMLElement, htmlTag: string, className: string) {
  let element: HTMLElement = document.createElement(htmlTag);
  parent.appendChild(element);

  return element;
}
