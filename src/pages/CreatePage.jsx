import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore/lite';
const CreatePage = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleAddPage = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const postId = Math.floor(Math.random() * 100000);
    const postsCollectionRef = collection(db, 'posts');

    addDoc(postsCollectionRef, {
      id: postId,
      title: form.title.value,
      text: form.preview.value,
      fullText: form.text.value,
      img: form.img.value,
      category: form.categories.value,
      views: Math.floor(Math.random() * 10000),
    });

    navigate('/posts');
  };

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Додати новину
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Якщо ти розумієшся на технологіях та слідкуєш за новинами, можеш без проблем додати
              новий пост в наш блог
            </p>
          </div>
          {/* <!-- text - end --> */}

          {/* <!-- form - start --> */}
          <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Заголовок*
              </label>
              <input
                name="title"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="preview"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Коротеньке превʼю*
              </label>
              <input
                name="preview"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="text"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Повний текст*
              </label>
              <textarea
                name="text"
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="img" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Лінк на зображення*
              </label>
              <input
                name="img"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="countries"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Виберіть категорію новини*
              </label>
              <select
                id="categories"
                name="category"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-3">
                <option>Виберіть категорію</option>
                <option value="news">Новини</option>
                <option value="apple">Apple</option>
                <option value="leaks">Чутки</option>
                <option value="blockchain">Блокчейн</option>
                <option value="country">Держава</option>
              </select>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                onClick={handleAddPage}>
                Додати новину
              </button>
              <span className="text-gray-500 text-sm">*Обовʼязково</span>
            </div>
          </form>
          {/* <!-- form - end --> */}
          <div className="sm:col-span-2 flex justify-between items-center">
            <button
              onClick={goBack}
              className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Назад
            </button>
            <button
              onClick={() => signout(() => navigate('/', { replace: true }))}
              className="inline-block bg-red-400 hover:bg-red-500 focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Вийти
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
