import { UserDirectory } from './components/UserDirectory/UserDirectory';

export function App() {
  return (
    <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1>User Directory</h1>
      <UserDirectory />
    </main>
  );
}
