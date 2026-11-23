import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by name…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button className={styles.clear} onclick={() => onChange('')} aria-label="Clear">
        ×
      </button>
    </div>
  );
}
