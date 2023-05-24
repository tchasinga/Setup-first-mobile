import projectsData from './projects-data.js';
import { generateProjectPopUps } from './generate-html-utils.js';

const projectCards = document.querySelector('#project');
const modal = document.querySelector('#modal');

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  modal.innerHTML = html;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

projectCards.addEventListener('click', (e) => {
  e.preventDefault();

  const { id } = e.target;
  if (id.startsWith('open-project-popup-')) {
    const projectId = id.split('-')[3];
    handleModalOpen(projectId);
  }
});

modal.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'close-modal-popup') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

let output = '';
for (let i = 0; i < projectsData.length; i += 1) {
  output += `
  <div class="template"> 
  <div class="templateImg">
    <img src="${projectsData[i].featuredImage}"  class="ImgTagOffing"  alt="">
    <img src="${projectsData[i].newImg}"   class="ImgTagOnning"}  alt="">
  </div>
  <div class="templtaeDetails">
     <h1>${projectsData[i].name}</h1>
    <ul class="tempUl">
          <li>
        <a href="#">${projectsData[i].role}</a>
      </li>
      <li>
        <a href="#">${projectsData[i].platform} </a>
      </li>
      <li><a href="#">${projectsData[i].year}</a></li>
    </ul>
     <p>${projectsData[i].description}</p>
    <ul class="tempLang">
        <li class="luga" id="techCode">${projectsData[i].techOne} </li>
        <li class="luga" id="techCode">${projectsData[i].techTwo} </li>
        <li class="luga" id="techCode">${projectsData[i].techThree} </li>      
  </ul>
     <a href="#"><h3 id="open-project-popup-${projectsData[i].id}" class="seePro">See project</h3></a>
  </div>
  
</div> 
  `;
}
document.querySelector('#project').innerHTML = output;

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};