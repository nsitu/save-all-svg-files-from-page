/* copy the code below and paste into the browser console. */
/*  it will find all SVG elements on the page and download them */
/* it will attempt to locate a name for the svg from the innerHTML of nearby elements. */

document.querySelectorAll('svg').forEach( svg => {   
  var svgData = svg.outerHTML;
  var iconName = 'icon.svg'
  if (svg.nextSibling != null){
   iconName = svg.nextSibling.innerHTML
  }
  else if (svg.parentElement.nextSibling != null){
   iconName = svg.parentElement.nextSibling.innerHTML
  }
  iconName = iconName.replace(/(<([^>]+)>)/gi, "") /*strip tags */
  iconName = iconName.replace(' ', '_') /* underscore spaces*/
  var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = iconName +".svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

})
