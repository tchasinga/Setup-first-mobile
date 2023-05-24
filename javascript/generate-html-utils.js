export const generateTechnologyTags = (technologies) => {
  const html = technologies
    .map((technology) => `<li><a href="#">${technology}</a></li>`)
    .join('\n');
  return html;
};

export const generateProjectPopUps = (projectDetails) => {
  const {
    name,
    role,
    platform,
    year,
    descriptionlong,
    featuredImage,
    // technologies,
    linkToLiveVersion,
    linkToSource,
    techOne,
    techTwo,
    techThree,
  } = projectDetails;

  return `
  <div class="keeper">
  <div class="oneDiver">
    <h2>${name}</h2>
    <i id="close-modal-popup" class="fas fa-times"></i>
  </div>
<!--First side done-->
  <div class="twoDiver">
    <ul class="details">
      <li class="Newrole">
        <a href="#">${role}  <i class="fa fa-circle"></i></a>
      </li>
      <li class="Newrole">
        <a href="#">${platform}  <i class="fa fa-circle"></i></a>
      </li>
      <li class="Newrole"><a href="#">${year}</a></li>
    </ul>
  </div>
<!--Second side done-->
  <div class="threeDvier">
    <img src="${featuredImage}" class="PopUpImg" alt="" />
  </div>
<!--Third side done-->
  <div class="fourDvier">
    <div class="griding">
      <p>
        ${descriptionlong}
      </p>
    </div>
  <div class="btnn">
      <ul class="tags">
        <li>
        <a href="#" class="tagion">${techOne}</a>
        </li>

        <li>
        <a href="#" class="taging">${techTwo}</a>
        </li>

        <li >
        <a href="#" class="tagiono">${techThree}</a>
        </li>
        </ul>

   <div class="btn-group">
     <a href="${linkToLiveVersion}" class="btn btn-outline">
       See live <img src="Svg/LinksIcon.svg"  alt="">
     </a>
     <a href="${linkToSource}" class="btn btn-outline">
       See source <img src="IconGitHubi.svg"  alt="">
     </a>
   </div>
  </div>
</div>
</div>
  `;
};