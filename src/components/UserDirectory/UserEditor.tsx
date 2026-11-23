import { useState } from 'react';
import type { User } from '../../types';
import styles from './UserEditor.module.css';

interface UserEditorProps {
  user: User;
  onClose: () => void;
}

export function UserEditor({ user, onClose }: UserEditorProps) {
  const [draftName, setDraftName] = useState(user.name);

  return (
    <div className={styles.editor}>
      <h3 className={styles.title}>Edit user</h3>
      <label className={styles.label}>
        Name
        <input className={styles.input} value={draftName} />
      </label>
      <div className={styles.buttons}>
        <button className={styles.save} type="button" onClick={onClose}>
          Save
        </button>
      </div>
    </div>
  );
}
