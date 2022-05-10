/* copy the code below and paste into the browser console. */
/*  it will find all SVG elements on the page and download them */
/* it will attempt to locate a name for the svg from the innerHTML of nearby elements. */

document.querySelectorAll('svg').forEach( svg => {   
  let svgData = svg.outerHTML;
  let iconName = 'icon.svg'
  if (svg.nextSibling != null){
   iconName = svg.nextSibling.innerHTML
  }
  else if (svg.parentElement.nextSibling != null){
   iconName = svg.parentElement.nextSibling.innerHTML
  }
  /* strip all html tags from the file name.
  See also: https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/ */
  iconName = iconName.replace(/(<([^>]+)>)/gi, "") 
  /* use underscores instead of spaces*/
  iconName = iconName.replace(' ', '_') 
  let svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  let svgUrl = URL.createObjectURL(svgBlob);
  let downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = iconName +".svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

})
