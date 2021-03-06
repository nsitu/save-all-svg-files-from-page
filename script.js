/*  copy the code below and paste into the browser console. */
/*  it will find all SVG elements on the page and download them */
/*  it will attempt to locate a name for the svg from the innerHTML of nearby elements. */
/*  I found this to be useful on the following site: https://react-icons.github.io/react-icons */
/*  Make sure you are not breaking any terms of service. */

document.querySelectorAll('svg').forEach( svg => {   
  let svgData = svg.outerHTML;
  let iconName = 'icon'
  if (svg.nextSibling != null){
   iconName = svg.nextSibling.innerHTML ?? iconName
  }
  else if (svg.parentElement.nextSibling != null){
   iconName = svg.parentElement.nextSibling.innerHTML ?? iconName
  }
  /* strip all html tags from the file name.
  See also: https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/ */
  iconName = iconName.replace(/(<([^>]+)>)/gi, "") 
  /* use underscores instead of spaces*/
  iconName = iconName.replace(' ', '_') 
  if (! iconName.includes('react-icons') ){
   let svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
   let svgUrl = URL.createObjectURL(svgBlob);
   let downloadLink = document.createElement("a");
   downloadLink.href = svgUrl;
   downloadLink.download = iconName +".svg";
   document.body.appendChild(downloadLink);
   downloadLink.click();
   document.body.removeChild(downloadLink);
  }
})
