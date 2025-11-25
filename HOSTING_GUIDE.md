# Руководство по развертыванию (Hosting) и подключению базы данных (Supabase)

## 1. Подготовка к хостингу (Vercel)

Самый простой способ разместить ваш сайт бесплатно — использовать Vercel.

1.  Зарегистрируйтесь на [vercel.com](https://vercel.com).
2.  Установите Vercel CLI (если хотите деплоить с компьютера) или подключите GitHub репозиторий.
    *   Если через GitHub: Залейте код на GitHub, в Vercel нажмите "Add New Project" -> "Import", выберите репозиторий. Vercel сам определит, что это Vite + React проект.
    *   Если вручную: В терминале выполните `npx vercel`.

## 2. Подключение реальной базы данных (Supabase)

Сейчас сайт работает на "локальной" базе данных (в памяти браузера и файле mockData). Чтобы данные сохранялись в облаке и админка работала полноценно, нужно подключить Supabase.

### Шаг 1: Создание проекта в Supabase
1.  Зарегистрируйтесь на [supabase.com](https://supabase.com).
2.  Нажмите "New Project".
3.  Задайте имя (например, `Spectran`) и пароль базы данных.
4.  Дождитесь создания проекта.

### Шаг 2: Настройка таблиц
Перейдите в **SQL Editor** в панели Supabase и выполните следующий код для создания таблиц:

```sql
-- Категории
create table categories (
  id text primary key,
  name text not null,
  description text
);

-- Подкатегории
create table subcategories (
  id text primary key,
  category_id text references categories(id),
  name text not null
);

-- Товары
create table products (
  id text primary key,
  category_id text references categories(id),
  subcategory_id text references subcategories(id),
  name text not null,
  short_description text,
  full_description text,
  images text[], -- массив ссылок на фото
  specifications jsonb, -- характеристики в формате JSON
  is_bestseller boolean default false
);
```

### Шаг 3: Подключение к сайту
1.  В проекте сайта установите библиотеку Supabase:
    ```bash
    npm install @supabase/supabase-js
    ```
2.  Создайте файл `src/lib/supabase.ts`:
    ```typescript
    import { createClient } from '@supabase/supabase-js';

    const supabaseUrl = 'ВАШ_SUPABASE_URL'; // Из настроек проекта API
    const supabaseKey = 'ВАШ_SUPABASE_ANON_KEY'; // Из настроек проекта API

    export const supabase = createClient(supabaseUrl, supabaseKey);
    ```
3.  Обновите файл `src/lib/api.ts`, заменив методы `localStorage` на вызовы `supabase`.
    *   Например, вместо `localStorage.getItem` будет `const { data } = await supabase.from('products').select('*');`.

### Шаг 4: Включение Supabase в коде
Так как вы новичок, я подготовил код сайта так, чтобы он пока работал без Supabase.
Когда вы будете готовы переключиться, вам нужно будет переписать `src/lib/api.ts`.

Если вам понадобится помощь с написанием кода для Supabase, вы можете обратиться ко мне (или другому разработчику) снова, предоставив доступ к проекту.
