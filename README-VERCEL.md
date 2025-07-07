# GVSanime Frontend - Despliegue en Vercel

## 📋 Requisitos Previos

- Cuenta en [Vercel.com](https://vercel.com)
- Repositorio en GitHub/GitLab/Bitbucket
- Backend desplegado (en Render, Railway, etc.)
- Variables de entorno configuradas

## 🚀 Pasos para Desplegar

### 1. Preparar el Repositorio

Asegúrate de que tu repositorio contenga:
- ✅ `package.json` con scripts correctos
- ✅ `next.config.mjs` optimizado
- ✅ `vercel.json` configurado
- ✅ Variables de entorno en `env.example`

### 2. Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"New Project"**
3. Conecta tu repositorio de GitHub
4. Selecciona el repositorio `gvsanime`

### 3. Configurar el Proyecto

**Configuración básica:**
- **Framework Preset:** `Next.js` (se detecta automáticamente)
- **Root Directory:** `frontend` (si el frontend está en una subcarpeta)
- **Build Command:** `pnpm build` (se detecta automáticamente)
- **Output Directory:** `.next` (se detecta automáticamente)
- **Install Command:** `pnpm install` (se detecta automáticamente)

### 4. Variables de Entorno

Agrega estas variables en la sección **"Environment Variables"**:

```env
# Backend API URL (IMPORTANTE)
NEXT_PUBLIC_API_URL=https://tu-backend.onrender.com/api

# Site Configuration
NEXT_PUBLIC_SITE_NAME=GVSanime
NEXT_PUBLIC_SITE_DESCRIPTION=Tu universo de anime

# Opcionales
NEXT_PUBLIC_CDN_URL=https://tu-cdn.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### 5. Desplegar

1. Haz clic en **"Deploy"**
2. Vercel comenzará el build automáticamente
3. Espera a que termine el build (puede tomar 2-5 minutos)

### 6. Verificar el Despliegue

Una vez desplegado, deberías ver:
- ✅ Status: **Ready**
- ✅ URL: `https://tu-proyecto.vercel.app`
- ✅ Build logs sin errores

## 🔧 Configuración Adicional

### Dominio Personalizado
1. Ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

### Auto-Deploy
- Vercel despliega automáticamente cuando haces push a la rama principal
- Puedes configurar ramas específicas en **Settings** → **Git**

### Preview Deployments
- Cada pull request genera un preview deployment
- Útil para testing antes de merge

### Analytics
- Ve a **Analytics** para ver métricas de rendimiento
- Configura Google Analytics si lo necesitas

## 🚨 Solución de Problemas

### Error: "Build failed"
- Verifica que `package.json` tenga los scripts correctos
- Revisa que todas las dependencias estén instaladas
- Revisa los logs de build para errores específicos

### Error: "API calls failing"
- Verifica que `NEXT_PUBLIC_API_URL` esté configurada correctamente
- Asegúrate de que el backend esté funcionando
- Revisa CORS en el backend

### Error: "Images not loading"
- Verifica que los dominios estén en `next.config.mjs`
- Asegúrate de que las URLs de las imágenes sean HTTPS

### Error: "Environment variables not working"
- Verifica que las variables empiecen con `NEXT_PUBLIC_`
- Reinicia el deployment después de cambiar variables

## 📊 Optimizaciones

### Performance
- Vercel optimiza automáticamente las imágenes
- Habilita compresión gzip
- Usa CDN global

### SEO
- Configura metadatos en cada página
- Usa `next/head` para SEO dinámico
- Configura sitemap.xml

### Monitoring
- Ve a **Functions** para ver logs de API routes
- Usa **Speed Insights** para métricas de rendimiento
- Configura alertas en **Settings**

## 🔗 URLs Importantes

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentación Vercel:** https://vercel.com/docs
- **Next.js en Vercel:** https://vercel.com/docs/functions/serverless-functions/runtimes/nodejs

## 📝 Comandos Útiles

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login a Vercel
vercel login

# Desplegar desde CLI
vercel

# Desplegar a producción
vercel --prod

# Ver logs
vercel logs
```

## 🎯 Checklist de Despliegue

- [ ] Repositorio conectado a Vercel
- [ ] Variables de entorno configuradas
- [ ] Backend URL correcta
- [ ] Build exitoso
- [ ] Dominio configurado (opcional)
- [ ] Analytics configurado (opcional)
- [ ] Pruebas realizadas
- [ ] Documentación actualizada 