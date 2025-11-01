# 🔌 PortfolioV3 - Server

Back-end de mi portfolio personal — una API REST escrita en **TypeScript**.  
Este repositorio contiene la lógica del servidor (endpoints para el formulario de contacto y/o datos públicos del portfolio) y está preparado para ejecutarse localmente o en plataformas cloud.

---

## 🧭 Qué hace este repo

El servidor expone endpoints consumidos por el frontend (`PortfolioV03`), por ejemplo:
- **Enviar mensajes** desde el formulario de contacto.  
- **Entregar datos públicos** (lista de proyectos, skills, etc.) si está implementado.  

La implementación está en TypeScript dentro de `src/`.

---

## ⚙️ Tecnologías (esperadas / verificadas)

- ✅ **TypeScript**  
- ✅ **Node.js** (runtime)  
- ✅ **Express** (o un framework similar) para rutas REST  
- ✅ Herramientas de desarrollo como `ts-node`, `ts-node-dev` o `tsc` para dev

> Revisa `package.json` para confirmar scripts (`dev`, `build`, `start`) y dependencias exactas.

---

## 📁 Estructura del proyecto (ejemplo claro)

```bash
PortfolioV3-Server/
├── src/
│   ├── controllers/   # Lógica por endpoint (p. ej. contactController.ts)
│   ├── routes/        # Definición de rutas / middlewares (p. ej. contact.routes.ts)
│   ├── services/      # Integraciones (mailer, DB, etc.)
│   ├── utils/         # Helpers (validators, logger)
│   └── index.ts       # Punto de entrada del servidor
├── tsconfig.json
├── package.json
├── .env.example
└── README.md
```
---

## 🧰 Variables de entorno (ejemplo)

Crea un archivo .env con las variables que use tu servidor. Ejemplo genérico:

```bash
PORT=8500
NODE_ENV=development

# Si envías emails
EMAIL_SERVICE_API_KEY=xxxx

# Si usás una DB
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname
```

---

## 🧰 Instalación y ejecución local

```bash
# clonar
git clone https://github.com/Artarexces/PortfolioV3-Server.git
cd PortfolioV3-Server

# instalar dependencias
npm install

# modo desarrollo (revisá package.json por el script exacto)
npm run dev

# build + start (producción)
npm run build
npm start

```

---

## 🚦 Endpoints (ejemplos — adaptá a tu implementación real)

- Si querés, pegá acá los archivos de src/routes o src/controllers y te documento las rutas exactas.

### Ejemplo: Contact form:
- POST /api/contact
- Body (JSON):
```JSON
{
  "name": "Tino",
  "email": "tino@example.com",
  "message": "Hola! Quiero contactarme..."
}
```
- Respuesta de éxito:

```json 
{ "ok": true, "message": "Mensaje enviado" }
```

### Ejemplo: Datos públicos

- GET /api/projects → lista de proyectos (id, title, description, techs, repo/demo url)

- GET /api/projects/:id → detalle de un proyecto

---

## 🔒 Seguridad & recomendaciones

- Validá y sanitizá la entrada (usar express-validator, Zod o Joi).

- Protege las claves en variables de entorno; nunca commitees .env.

- Si guardás datos, asegura la conexión a la DB (TLS).

- Considerá rate-limiting y protección contra spam para el endpoint de contacto.

- Añadí CORS sólo para orígenes necesarios (p. ej. el dominio del frontend).

---

## 🛠 Futuras mejoras 

- Validación robusta con Zod o Joi.

- Registro de métricas (requests, errores) y logging estructurado (p. ej. pino).

- Tests básicos de integración (supertest + vitest/jest).

- Rate-limiting y CAPTCHA para el formulario de contacto.

- Endpoint para servir datos públicos (projects/skills) con cache simple.

---

## 👨‍💻 Autor

**Martin Rodriguez (Artarexces)**

💼 [GitHub](https://github.com/Artarexces/PortfolioV3-Server)

🌐 [Portfolio](https://portfolio-v03-eight.vercel.app/)