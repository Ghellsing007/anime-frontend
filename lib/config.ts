// Configuración del backend
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api`;

// Configuración de Supabase
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Configuración del sitio
export const SITE_NAME = 'GVSanime';
export const SITE_DESCRIPTION = 'Tu plataforma de anime favorita'; 