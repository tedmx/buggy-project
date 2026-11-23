import styles from './UserRow.module.css';
import type { User } from '../../types';

interface UserRowProps {
  user: User;
  selected: boolean;
  onSelect: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onDelete: (id: number) => void;
}

export function UserRow({ user, selected, onSelect, onToggleFavorite, onDelete }: UserRowProps) {
  return (
    <li
      className={selected ? styles.rowSelected : styles.row}
      onClick={() => onSelect(user.id)}
    >
      <div class={styles.info}>
        <img className={styles.avatar} src={`https://i.pravatar.cc/40?u=${user.id}`} />
        <div>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.role}>{user.role}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.like}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(user.id);
          }}
        >
          ♥ {user.favorites}
        </button>
        <button
          className={styles.delete}
          onClick={(event) => {
            event.stopPropagation();
            onDelete(user.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
