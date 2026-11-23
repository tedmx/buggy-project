import type { User } from '../types';

const USERS: User[] = [
  { id: 1, name: 'Mira Kovacs', email: 'mira@example.com', role: 'Designer', favorites: 0 },
  { id: 2, name: 'Tomas Berg', email: 'tomas@example.com', role: 'Engineer', favorites: 0 },
  { id: 3, name: 'Aisha Rahman', email: 'aisha@example.com', role: 'Manager', favorites: 0 },
  { id: 4, name: 'Diego Fontana', email: 'diego@example.com', role: 'Engineer', favorites: 0 },
  { id: 5, name: 'Yuki Tanaka', email: 'yuki@example.com', role: 'Analyst', favorites: 0 },
  { id: 6, name: 'Farah Haddad', email: 'farah@example.com', role: 'Designer', favorites: 0 },
  { id: 7, name: 'Lars Nilsson', email: 'lars@example.com', role: 'Support', favorites: 0 },
  { id: 8, name: 'Priya Nair', email: 'priya@example.com', role: 'Engineer', favorites: 0 },
];

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS.map((user) => ({ ...user })));
    }, 800);
  });
}
