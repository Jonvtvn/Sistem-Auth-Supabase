# 🔐 Sistema de Autenticación con Supabase y Next.js

Este proyecto implementa un sistema de autenticación completo utilizando **Next.js 14**, **Supabase** como backend de autenticación, y soporte para SSR (Server Side Rendering). Incluye funcionalidades como registro, inicio de sesión, cierre de sesión, recuperación y restablecimiento de contraseña, protección de rutas y redirección inteligente de usuarios autenticados/no autenticados.

## 🚀 Funcionalidades

- ✅ Registro de usuario con verificación por email
- ✅ Inicio de sesión con email y contraseña
- ✅ Cierre de sesión
- ✅ Recuperación y restablecimiento de contraseña
- ✅ Protección de rutas (middleware)
- ✅ Redirección automática para usuarios autenticados/no autenticados
- ✅ Interfaz mínima con botones para cada acción

## 🧰 Tecnologías

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Middleware (Next.js)
- Server Actions (`"use server"`)

## 🛠️ Configuración Inicial

### 1. Crear cuenta y proyecto en Supabase

Si no tienes una cuenta:

1. Ve a [https://supabase.com/](https://supabase.com/) y crea una cuenta gratuita.
2. Crea una **organización** (puedes usar tu nombre o el de tu proyecto).
3. Dentro de la organización, crea un nuevo **proyecto**.
4. Una vez creado, ve a la pestaña **"Settings > API"** y copia:
   - `Project URL`
   - `Anon public key`

### 2. Clonar el repositorio

```bash
git clone https://github.com/Jonvtvn/Sistem-Auth-Supabase
```
```bash
cd Sistem-Auth-Supabase
```

### 3. Instala las dependencias:

```bash
npm install
# o
yarn install
```


### 4. Crea un archivo .env.local con tus claves de Supabase:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```


### 5. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

## 📸 Capturas del sitio

A continuación se muestran algunas vistas del diseño de la página:

![Vista 1](/Untitled.png)
