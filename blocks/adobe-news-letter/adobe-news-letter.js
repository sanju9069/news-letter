import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const table = row.querySelectorAll('table');
    const img = table[0].querySelectorAll('img');
    const tablerow = table[0].childNodes[1].children;

    table.forEach((ele, idx) => {
      ele.setAttribute('width', '100%');
      ele.setAttribute('border', '0');
      ele.setAttribute('cellspacing', '0');
      ele.setAttribute('cellpadding', '0');
    });
    table[0].setAttribute('align', 'center');
    table[0].setAttribute('width', '750');
    table[0].setAttribute('bgColor', '#3e3c3d');

    [...tablerow].forEach((ele, idx) => {
      ele.className = 'table-row' + (idx + 1);
      ele.setAttribute('data-table-row', 'table-row' + (idx + 1));
    });
    img.forEach((ele, idx) => {
      ele.setAttribute('height', 'auto');
      ele.setAttribute('width', '100%');
    });
    img[1].setAttribute('width', '353');
    img[img.length - 1].setAttribute('width', '140');
  });
}
