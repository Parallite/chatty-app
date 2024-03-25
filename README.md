<h1 align="center" id="title">Chatty App</h1>

<p align="center"><img src="https://github.com/Parallite/chatty-app/blob/main/public/logo.png" alt="project-image"></p>

<p id="description">Chatty App - это веб-приложение, реализованное с помощью Next.js. Представляет собой классический чат мессенджер с возможностью обмена сообщениями в режиме реального времени, аналогичен популярным платформам обмена сообщениями. Приложение включает в себя ряд функций и интеграций для улучшения коммуникации, упрощенной аутентификации пользователей и общего удобства использования. На текущий момент, приложение продолжает пополняться функционалом и доработкой. Это мое первое приложение, реализованное с Next.js.
</p>

<h2>Demo</h2>

<p>Ознакомиться с живой демонстрацией веб-приложения Chatty App можно перейдя по следующей ссылке: [Ссылка на Vercel](https://chatty-app-one.vercel.app/).
Не стесняйтесь взаимодействовать с демо-версией и тестировать доступные функции.</p>

<h2>Возможности приложения:</h2>

- Аутентификация пользователя обрабатывается с помощью библиотеки аутентификации NextAuth. Он предлагает функции безопасной регистрации, входа в систему и управления учетными записями, обеспечивая конфиденциальность и защиту информации о пользователях.
- Пользователи имеют возможность пройти аутентификацию, используя свои учетные записи Google и GitHub.
- Приложение использует сервис Pusher для обеспечения доставки мгновенных сообщений и обновлений.
- Приложение отображает онлайн/оффлайн статус пользователей, указывая на их доступность для разговора. Эта функция помогает пользователям определить, кто в настоящее время активен и готов к общению в режиме реального времени.
- Пользователи могут видеть, были ли их отправленные сообщения прочитаны получателями, предоставляя ценную информацию о статусе сообщения и обеспечивая получение сообщения.
- Пользователи могут участвовать как в групповых чатах, так и в обмене сообщениями один на один. Групповые чаты способствуют совместным обсуждениям между несколькими пользователями, в то время как обмен сообщениями один на один позволяет общаться в частном и персонализированном взаимодействии.
- Приложение интегрируется с Cloudinary, облачной платформой управления мультимедиа, что обеспечивает беспрепятственную загрузку и хранение файлов и изображений. Эта функция облегчает обмен и просмотр мультимедийного контента в разговорах.
- Пользователи могут прикреплять файлы, такие как документы или изображения, к своим сообщениям, облегчая простой и эффективный обмен контентом в разговорах.
- Пользователи имеют возможность настраивать свои профили, добавляя изображения профиля, устанавливая отображаемые имена и изменяя другую соответствующую информацию.

<br />

## :toolbox: Шаги по установке

1. Убедиться, что у Вас установлен **Git** и **NodeJS**.
2. Клонировать репозиторий на свой компьютер.
3. Создать `.env` файл в основной директории.
4. Заполнить `.env` файл содержимым:

```bash
# .env

# mongodb url
DATABASE_URL="mongodb://127.0.0.1/chatty-app"

# next auth secret (произвольная строка)
NEXTAUTH_SECRET=<your-nextauth-secret>

# github auth реквизиты
GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>

# google auth реквизиты
GOOGLE_CLIENT_ID=ХХХХХХХХХХХХХХХХХХХХХХХХХ.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# next cloudinary реквизиты
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxxxxxx
NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET=xxxxxxxx

# pusher реквизиты
PUSHER_APP_ID=00000000
PUSHER_APP_SECRET=xxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PUSHER_APP_KEY=xxxxxxxxxxxxxxxxxxxxx

```

5. **MongoDB URL**

   - Установить и запустить MongoDB локально или использовать облако MongoDB сервиса.
   - Изменить наполнение в `DATABASE_URL` на свой актуальный адрес MongoDB для подключения.

6. **NextAuth Configuration**

   - Настройте NextAuth, следуя официальной документации: [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
   - Сгенерируйте случайную строку для `NEXTAUTH_SECRET`. Строка может иметь любое значение.

7. **GitHub Auth**

   - Настройте GitHub OAuth, следуя руководству: [Creating an OAuth App](https://docs.github.com/en/developers/apps/creating-an-oauth-app)
   - Заполните `GITHUB_CLIENT_ID` и `GITHUB_CLIENT_SECRET` соответствующими данными OAuth.

8. **Google Auth**

   - Создайте проект в Google Cloud Console: [Google Cloud Console](https://console.cloud.google.com/)
   - Следуйте инструкциям по настройке экрана согласия и учетных данных: [Create credentials](https://developers.google.com/identity/sign-in/web/sign-in)
   - Заполните `GOOGLE_CLIENT_ID` и `GOOGLE_CLIENT_SECRET` соответствующими данными Google Cloud.

9. **Cloudinary**

   - Зарегистрируйте учетную запись Cloudinary: [Cloudinary Sign-up](https://cloudinary.com/users/register/free)
   - Получите имя вашего облака с панели управления.
   - Заполните `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`и `NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET` соответствующими данными Cloudinary.

10. **Pusher**

    - Зарегистрируйте учетную запись Pusher: [Pusher Sign-up](https://dashboard.pusher.com/accounts/sign_up)
    - CСоздайте новое приложение и получите app ID, secret, app key, и cluster.
    - Заполните `PUSHER_APP_ID`, `PUSHER_APP_SECRET`, `NEXT_PUBLIC_PUSHER_APP_KEY`, и `NEXT_PUBLIC_PUSHER_APP_CLUSTER` соответствующими данными Pusher.

11. Откройте терминал в основной директории. Установите зависимости при помощи консольной команды `npm install`.

12. Теперь приложение полностью настроено 👍 и Вы можете начать его использовать, запустив консольную команду `npm run dev`.

## :gem: Dependencies

Зависимости, которые используются в Chatty App.

- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react) - Version: ^1.7.18
- [@hookform/error-message](https://www.npmjs.com/package/@hookform/error-message) - Version: ^2.0.1
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) - Version: ^3.3.4
- [@next-auth/prisma-adapter](https://www.npmjs.com/package/@next-auth/prisma-adapter) - Version: ^1.0.7
- [@prisma/client](https://www.npmjs.com/package/@prisma/client) - Version: ^5.6.0
- [axios](https://www.npmjs.com/package/axios) - Version: ^1.6.2
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Version: ^5.1.1
- [clsx](https://www.npmjs.com/package/clsx) - Version: ^2.0.0
- [date-fns](https://www.npmjs.com/package/date-fns) - Version: ^3.3.1
- [framer-motion](https://www.npmjs.com/package/framer-motion) - Version: ^11.0.16
- [lodash](https://www.npmjs.com/package/lodash) - Version: ^4.17.21
- [next](https://www.npmjs.com/package/next) - Version: 14.0.2
- [next-auth](https://www.npmjs.com/package/next-auth) - Version: ^4.24.5
- [next-cloudinary](https://next.cloudinary.dev/installation) - Version: ^5.20.0
- [next-superjson-plugin](https://www.npmjs.com/package/next-superjson-plugin) - Version: ^0.5.10
- [pusher](https://pusher.com) - Version: ^5.2.0
- [react](https://www.npmjs.com/package/react) - Version: ^18
- [react-dom](https://www.npmjs.com/package/react-dom) - Version: ^18
- [react-hook-form](https://www.npmjs.com/package/react-hook-form) - Version: ^7.48.2
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast) - Version: ^2.4.1
- [react-icons](https://www.npmjs.com/package/react-icons) - Version: ^4.12.0
- [react-select](https://www.npmjs.com/package/react-select) - Version: ^5.8.0
- [react-spinners](https://www.npmjs.com/package/react-spinners) - Version: ^0.13.8
- [yup](https://www.npmjs.com/package/yup) - Version: ^1.4.0
- [zustand](https://www.npmjs.com/package/zustand) - Version: ^4.5.2

<h2>💻 Стек технологий:</h2>

<ul>
    <li><b>Front-end:</b> Next.js, Typescript, React, Tailwind</li>
    <li><b>Back-end:</b> Node.js</li>
    <li><b>Real-time Messaging:</b> Pusher</li>
    <li><b>Authentication:</b> NextAuth</li>
    <li><b>File and Image Upload:</b> Cloudinary CDN</li>
</ul>
