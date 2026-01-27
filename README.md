# JL Expensia — Documento de Definición del Proyecto

## 1. Descripción General

**JL Expensia** es una plataforma **SaaS web** orientada a la gestión financiera de **autónomos**, diseñada con una **arquitectura escalable** que permita su evolución futura hacia una **plataforma completa de gestión financiera para PYMEs**.

El sistema permitirá registrar, clasificar y analizar gastos, generar reportes financieros y visualizar métricas clave mediante dashboards interactivos, manteniendo siempre una arquitectura modular, segura y extensible.

---

## 2. Objetivo del Proyecto

Desarrollar una aplicación web moderna que permita a los autónomos:

- Registrar y categorizar gastos
- Visualizar su situación financiera en tiempo real
- Generar reportes profesionales en PDF
- Exportar datos para uso fiscal y contable

El sistema se diseñará desde el inicio para permitir:

- Multiusuario
- Multicuenta (futura multiempresa)
- Escalabilidad funcional
- Seguridad y control de accesos

---

## 3. Alcance del Proyecto

### 3.1 Alcance Inicial (MVP — Autónomos)

Funcionalidades incluidas en la primera versión:

- Autenticación y gestión de usuarios
- Gestión de cuentas financieras
- Registro y gestión de gastos
- Gestión de categorías
- Dashboard financiero
- Generación de reportes PDF
- Exportación de datos (CSV / Excel)

---

### 3.2 Alcance Futuro (Iteraciones PYMEs)

Funcionalidades planteadas para futuras versiones:

- Multiempresa
- Gestión de empleados
- Roles y permisos avanzados
- Flujos de aprobación de gastos
- Presupuestos por departamentos
- Facturación
- Integración bancaria
- Reportes fiscales avanzados

---

## 4. Stakeholders

[Solo para ejemplo]

| Rol | Descripción |
|-------|-------------|
| Product Owner | Responsable de requisitos y priorización |
| Backend Team | Desarrollo de la API y lógica de negocio |
| Frontend Team | Desarrollo de la interfaz de usuario |
| DevOps | Infraestructura, despliegue y seguridad |
| Usuarios finales | Autónomos y pequeñas empresas |

---

## 5. Requisitos Funcionales

### 5.1 Autenticación y Usuarios

- Registro de usuarios
- Login Auth0
- Gestión de perfil

---

### 5.2 Gestión de Cuentas Financieras

- Creación de una o varias cuentas financieras
- Selección de cuenta activa
- Separación de datos por cuenta

*(Este diseño permite evolucionar a un modelo multiempresa sin refactorización estructural)*

---

### 5.3 Gestión de Gastos

- Crear, editar y eliminar gastos
- Campos obligatorios:
  - Fecha
  - Importe
  - Categoría
  - Descripción
- Campos opcionales:
  - Proveedor
  - IVA
  - Método de pago
  - Archivo adjunto (recibo o factura)

---

### 5.4 Gestión de Categorías

- CRUD de categorías
- Categorías globales y personalizadas por cuenta

---

### 5.5 Dashboard Financiero

- Total de gastos por periodo
- Evolución temporal
- Distribución por categorías
- Comparativas entre rangos de fechas
- Indicadores financieros básicos (KPIs)

---

### 5.6 Reportes PDF

- Selección de rango de fechas
- Resumen general
- Desglose por categoría
- Separación base imponible / IVA
- Diseño profesional listo para presentación fiscal

---

### 5.7 Exportación de Datos

- Exportación a CSV
- Exportación a Excel

---

## 6. Requisitos No Funcionales

### 6.1 Arquitectura

- API REST desacoplada del frontend
- Arquitectura por capas
- Separación clara de responsabilidades
- Aplicación de principios SOLID

---

### 6.2 Seguridad

- Control de acceso por usuario y cuenta
- Protección de endpoints sensibles

---

### 6.3 Escalabilidad

- Soporte para múltiples cuentas
- Preparado para múltiples usuarios por cuenta
- Diseño orientado a crecimiento funcional

---

### 6.4 Rendimiento

- Consultas optimizadas
- Índices en base de datos
- Paginación en endpoints críticos

---

## 7. Arquitectura General del Sistema

Arquitectura lógica:

- [ React Frontend ]
- [ FastAPI REST API ]
- [ MariaDB ]

Arquitectura de despliegue: [ Docker Compose ]

- frontend
- backend
- database

---

## 8. Modelo de Dominio Base

### Usuario
- id
- email
- created_at

---

### Cuenta (futura Empresa)
- id
- name
- owner_id

---

### UsuarioCuenta (futuros roles)
- user_id
- cuenta_id
- role

---

### Gasto
- id
- cuenta_id
- fecha
- importe
- iva
- descripcion
- proveedor
- metodo_pago
- categoria_id
- archivo_url

---

### Categoria
- id
- cuenta_id (nullable → categorías globales)

---

### Proveedor
- id
- cuenta_id
- nombre

---

### MetodoPago
- id
- cuenta_id
- nombre

---

## 9. Roadmap de Desarrollo

### Fase 1 — Core Funcional (2 semanas)
- Autenticación
- Modelo de datos
- CRUD de gastos
- Categorías

---

### Fase 2 — Dashboard y Reportes (2 semanas)
- Métricas financieras
- Visualización de datos
- Generación de PDFs

---

### Fase 3 — Multi-cuenta y Permisos (1–2 semanas)
- Arquitectura SaaS completa
- Roles
- Seguridad avanzada

---

## 10. Stack Tecnológico

### Backend
- Python 3.12
- FastAPI
- SQLAlchemy
- MariaDB
- Alembic

---

### Frontend
- React
- React Query
- Zustand
- TailwindCSS
- Recharts

---

### Infraestructura
- Docker
- Docker Compose
- CI/CD 

---

## 11. Iteraciones Futuras (Visión PYME)

- Gestión de empleados
- Roles jerárquicos
- Flujos de aprobación
- Presupuestos
- Integración bancaria
- Facturación
- Informes fiscales avanzados

---

## 12. Notas Finales

El proyecto está diseñado con una arquitectura modular y escalable, permitiendo su crecimiento progresivo hacia una plataforma SaaS completa de gestión financiera para pequeñas y medianas empresas, manteniendo la base tecnológica y estructural desde las primeras fases.
