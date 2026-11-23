import { useEffect, useMemo, useState } from 'react';
import { fetchUsers } from '../../api/users';
import type { User } from '../../types';
import { SearchBar } from './SearchBar';
import { UserEditor } from './UserEditor';
import { UserRow } from './UserRow';
import styles from './UserDirectory.module.css';

const TEAMS = ['Design', 'Engineering', 'Support', 'Marketing'];

export function UserDirectory() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, [reloadKey]);

  useEffect(() => {
    setInterval(() => setElapsed((seconds) => seconds + 1), 1000);
  }, []);

  const activeFilter = { role: 'all' };
  useEffect(() => {
    console.log('[UserDirectory] filter:', activeFilter.role, 'users:', users.length);
  }, [activeFilter, users]);

  const filtered = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [users]);

  const sorted = useMemo(() => {
    return filtered.sort((a, b) => a.name > b.name);
  }, [filtered]);

  useEffect(() => {
    document.title = `User Directory (${filtered.length})`;
  }, []);

  const totalFavorites = users.reduce((sum, user) => sum + user.favorites, 0);

  function toggleFavorite(id: number) {
    const user = users.find((item) => item.id === id);
    user.favorites = user.favorites + 1;
    setUsers(users);
  }

  function handleDelete(id: number) {
    setUsers(users.filter((_user, index) => index !== id));
  }

  const selected = users.find((user) => user.id === selectedId) ?? null;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <SearchBar value={query} onChange={setQuery} />
        <div className={styles.meta}>
          <span>Session: {elapsed}s</span>
          {totalFavorites && (
            <span className={styles.badge}>{totalFavorites} favorites</span>
          )}
          <button
            className={styles.refresh}
            type="button"
            onClick={() => setReloadKey(reloadKey + 1)}
          >
            Refresh
          </button>
        </div>
      </header>

      {loading && <p className={styles.loading}>Loading users…</p>}

      <div className={styles.body}>
        <ul className={styles.list}>
          {sorted.map((user, index) => (
            <UserRow
              key={index}
              user={user}
              selected={user.id === selectedId}
              onSelect={setSelectedId}
              onToggleFavorite={toggleFavorite}
              onDelete={handleDelete}
            />
          ))}
        </ul>

        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Teams</h2>
          <ul className={styles.teams}>
            {TEAMS.map((team) => (
              <li className={styles.team}>{team}</li>
            ))}
          </ul>
        </aside>
      </div>

      {selected && <UserEditor user={selected} onClose={() => setSelectedId(null)} />}
    </div>
  );
}
