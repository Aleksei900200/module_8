//Прописывание кнопки и дива
const btnS1 = document.getElementById('btnS1');
const photoGallery = document.querySelector('.photo-gallery');

//Прописывание события - запрос на сайт
btnS1.addEventListener('click', getPhotos);

//Функция - запрос на сайт
async function getPhotos(event) {
	//Предотвращение автоматического обновления страницы
  event.preventDefault();
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    if (!response.status=='success') {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    console.log(data);
    if (data) {
      const arrOfDogs = data.message;
      showAllPhotos(arrOfDogs);
    }
  } catch (e) {
    console.error(e.message);
  }
  btnS1.removeEventListener('click', getPhotos);
  console.log('Больше не кликает?!');
}
// Функция создание нового массива с изображениеми и вывод в див
function showAllPhotos(massive) {
  let newMassive = [];
  for (i = 0; i < massive.length; i++) {
    let imageItem = document.createElement('img');
    imageItem.src = massive[i];
    imageItem.style.width = '150px';
		imageItem.className='content-alignment';
    newMassive.push(imageItem);
  }
  console.log(newMassive);
	// Вывод массива с изображениями на страницу
  newMassive.forEach((el) => photoGallery.appendChild(el));
}
