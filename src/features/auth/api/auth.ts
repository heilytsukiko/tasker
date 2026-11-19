import { request, type UserRole } from '@/shared/api';
import type { RegisterRole } from '../model/validation';

/*
 * ВАЖНО: адреса и формы ответов ниже — предположение фронтенда.
 * Контракт с backend ещё не согласован (см. docs/ARCHITECTURE.md); при расхождении
 * правится только этот файл.
 */

export interface AuthUser {
  id: number;
  email: string;
  role: UserRole;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  role: RegisterRole;
}

export function login(payload: LoginPayload): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/login', { method: 'POST', body: payload });
}

export function register(payload: RegisterPayload): Promise<AuthResponse> {
  return request<AuthResponse>('/auth/register', { method: 'POST', body: payload });
}
