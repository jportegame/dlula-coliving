# SEO Configuration Guide - D'Lula Coliving

## Archivos Creados y Configurados

### 1. **robots.txt** (`/public/robots.txt`)
Archivo que instruye a los motores de búsqueda cómo rastrear tu sitio.

**Características:**
- ✅ Permite a todos los bots indexar el sitio
- ✅ Apunta al sitemap.xml
- ✅ Configuración específica para Googlebot (sin delay) y Bingbot (1 segundo de delay)
- ✅ Excluye directorios innecesarios (admin, node_modules, etc.)

**Para personalizar:**
Si necesitas cambiar el URL del sitemap o excluir más rutas, edita `/public/robots.txt`

---

### 2. **sitemap.xml** (`/public/sitemap.xml`)
Mapa del sitio que lista todas las URLs importantes para los buscadores.

**URLs Incluidas:**
- **Páginas Estáticas:** Home, Our Rooms, Common Areas, About, Contact
- **Páginas Dinámicas (Rooms):** Bedroom 1-6
- **Páginas Dinámicas (Common Areas):** Coworking, House, Kitchen, Living Room

**Total de URLs:** 16

**Campos por URL:**
- `<loc>`: URL completa
- `<lastmod>`: Última modificación
- `<changefreq>`: Frecuencia esperada de cambios (weekly/monthly)
- `<priority>`: Prioridad relativa (0.0-1.0)

---

### 3. **Configuración de Meta Tags Dinámicos**

#### En `siteConfig.tsx` (nuevo objeto `seo`):
```typescript
seo: {
  title: "D'Lula Coliving Medellin | Luxury Boutique Rooms...",
  description: "Experience luxury boutique coliving...",
  keywords: "coliving medellin, boutique accommodation...",
  author: "D'Lula Coliving",
  ogImage: "/dlula-logo.png",
  ogUrl: "https://dlula.com",
  twitterHandle: "@dlulacoliving",
}
```

#### En `index.html`:
```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

---

### 4. **Componente SEOHead** (`/src/components/common/SEOHead.tsx`)

Componente reutilizable que maneja todos los meta tags.

**Uso en componentes:**
```typescript
import SEOHead from './components/common/SEOHead';

function MyPage() {
  return (
    <>
      <SEOHead
        title="Custom Title"
        description="Custom description"
        keywords="custom keywords"
        canonicalUrl="https://dlula.com/my-page"
      />
      {/* Page content */}
    </>
  );
}
```

**Props Disponibles:**
- `title` - Título de la página (predeterminado: siteConfig.seo.title)
- `description` - Meta description (predeterminado: siteConfig.seo.description)
- `keywords` - Keywords (predeterminado: siteConfig.seo.keywords)
- `ogImage` - Imagen para redes sociales (predeterminado: siteConfig.seo.ogImage)
- `ogUrl` - URL de open graph (predeterminado: siteConfig.seo.ogUrl)
- `ogType` - Tipo de contenido (default: 'website')
- `canonicalUrl` - URL canónica (opcional)

---

### 5. **Script de Generación de Sitemap** (`/scripts/generate-sitemap.js`)

Script Node.js que genera automáticamente el sitemap basado en la configuración.

**Uso:**
```bash
npm run generate-sitemap
```

**Cuándo Usar:**
- Después de agregar nuevos rooms o common areas
- Para actualizar las fechas de `lastmod`
- Para cambiar prioridades dinámicamente

---

## Checklist de Implementación ✅

- [x] `robots.txt` creado
- [x] `sitemap.xml` creado con 16 URLs
- [x] Meta tags dinámicos con react-helmet-async
- [x] Componente SEOHead implementado
- [x] siteConfig actualizado con objeto `seo`
- [x] index.html actualizado con referencia al sitemap
- [x] Script de generación de sitemap
- [x] Build verificado sin errores

---

## Meta Tags Generados Automáticamente

La aplicación ahora inyecta automáticamente en `<head>`:

```html
<!-- Basic Meta Tags -->
<title>D'Lula Coliving Medellin | Luxury Boutique Rooms for Digital Nomads</title>
<meta name="description" content="Experience luxury boutique coliving...">
<meta name="keywords" content="coliving medellin, boutique accommodation...">
<meta name="author" content="D'Lula Coliving">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="/dlula-logo.png">
<meta property="og:url" content="https://dlula.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="/dlula-logo.png">
<meta name="twitter:creator" content="@dlulacoliving">

<!-- Robots -->
<meta name="robots" content="index, follow">
```

---

## Próximos Pasos Recomendados

1. **Reemplazar URL de dominio:**
   - En `siteConfig.seo.ogUrl` → cambiar `https://dlula.com`
   - En `sitemap.xml` → cambiar `https://dlula.com`
   - En `robots.txt` → cambiar `https://dlula.com`

2. **Actualizar cada página con SEOHead personalizado:**
   - `/src/pages/MainPage.tsx`
   - `/src/pages/OurRoomsPage.tsx`
   - `/src/pages/RoomsDetailsPage.tsx`
   - `/src/pages/AboutUsPage.tsx`
   - `/src/pages/ContactUsPage.tsx`
   - `/src/pages/CommonAreasPage.tsx`
   - `/src/pages/CommonAreaDetailsPage.tsx`

3. **Enviar a Google Search Console:**
   - Verificar el sitio
   - Subir sitemap.xml
   - Monitorear errores de crawl

4. **Enviar a Bing Webmaster Tools:**
   - Similar al proceso de Google

5. **Agregar Schema Markup JSON-LD:**
   - LocalBusiness schema
   - Product schema para rooms
   - BreadcrumbList schema

---

## Estructura de Archivos

```
d-lula-coliving-front/
├── public/
│   ├── robots.txt          ✅ NUEVO
│   └── sitemap.xml         ✅ NUEVO
├── src/
│   ├── components/
│   │   └── common/
│   │       └── SEOHead.tsx ✅ NUEVO
│   ├── config/
│   │   └── siteConfig.tsx  ✅ ACTUALIZADO (agregado `seo` object)
│   ├── layout/
│   │   └── DefaultLayout.tsx ✅ ACTUALIZADO (agregado SEOHead)
│   └── main.tsx            ✅ ACTUALIZADO (agregado HelmetProvider)
├── scripts/
│   └── generate-sitemap.js ✅ NUEVO
├── index.html              ✅ ACTUALIZADO (agregado sitemap link)
└── package.json            ✅ ACTUALIZADO (agregado script)
```

---

## Validación de Archivos

Puedes validar que los archivos estén correctamente formateados:

**robots.txt:**
```bash
curl https://dlula.com/robots.txt
```

**sitemap.xml:**
```bash
curl https://dlula.com/sitemap.xml
```

O usa herramientas online como:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://www.seobility.net/en/seocheck/
